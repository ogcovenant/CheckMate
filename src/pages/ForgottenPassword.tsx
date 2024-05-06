import { Box, Image, Text, Input, Button, Spinner, useToast } from "@chakra-ui/react"
import { useFormik } from "formik"
import logo from "../assets/logo.png"
import onboarding from "../assets/onboarding.png";
import * as Yup from "yup"
import { useState } from "react";
import axios from "axios";


const ForgottenPassword = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
    }),
    onSubmit: async(values) => {
      setIsLoading(true);

      try {
        const res = await axios.post("http://localhost:3000/forgotten-password", {
          email: values.email,
        }, {
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const data = res.data

        setIsLoading(false);

        toast({
          title: data.msg,
          description: "Check your email",
          status: "success",
          variant: "left-accent",
          duration: 5000,
          position: "top-right"
        })

        setTimeout(() => {
          location.replace("/login")
        }, 6000)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err : any) {
        setIsLoading(false) 

        if(err.response.status === 404){
          return toast({
            title: "User does not exist",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right"
          })
        }

        if(err.response.status === 406){
          return toast({
            title: "Invalid email provided",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right"
          })
        }

        toast({
          title: "An unexpected error occured",
          status: "error",
          variant: "left-accent",
          duration: 3000,
          position: "top-right"
        })        
      }
    }
});


  return (
    <>
      <Box height={"100vh"} display={"flex"} flexDirection={{ base:"column", lg:"row" }} alignItems={{ lg:"center" }} justifyContent={{ base:"center", xl:"space-between" }}>
        <Box
          background={"black"}
          width={{ base:"100%", lg:"40vh", xl:"49%" }}
          height={{ base:"40vh", md:"100vh", xl:"100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={onboarding} width={{ base:150, md:200, lg:300, xl:400 }} />
        </Box>
        <Box
          width={{ base:"100%", lg:"60vh", xl:"50%" }}
          height={{ base:"60vh", lg:"100%" }}
          display={"flex"}
          justifyContent={"center"}
          p={50}
        >
          <Box margin={"auto 0"} position={"relative"} width={"100%"}>
            <Image src={logo} width={300} margin={"0 auto"} mb={10}/>
            <Text fontSize={"4xl"} fontWeight={700}>
              Forgot your Password?
            </Text>
            <Text fontSize={"sm"}>
              Enter your email below and if an account is associated with the email, a password reset link will be sent
            </Text>
            <Box mt={3} width={"100%"}>
              <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
              <Box width={"100%"}>
                  <Input
                    type="email"
                    border={"1px solid #a1a1a1"}
                    width={"100%"}
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {
                    formik.touched.email && formik.errors.email ?
                      (
                      <Text color={"red"} fontSize={"sm"}>{formik.errors.email}</Text>
                      ) : null
                  }
                </Box>
                <Button
                  mt={3}
                  background={"#ffcc24"}
                  width={"100%"}
                  _hover={{ backgroundColor: "#ffcc24" }}
                  type="submit"
                >
                   {
                    isLoading ? (
                      <Spinner />
                    ) : "Send Reset Link"
                  }
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ForgottenPassword