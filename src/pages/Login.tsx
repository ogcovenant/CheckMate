import { Box, Image, Text, Link, Input, Button, useToast, Spinner } from "@chakra-ui/react";
import { Link as link } from "react-router-dom";
import onboarding from "../assets/onboarding.png";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useState } from "react";
import axios from "axios";
import storeJWT from "../utils/storeJWT";
import logo from "../assets/logo.png"

const Login = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
      password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .required("Required"),
    }),
    onSubmit: async(values) => {
      setIsLoading(true);

      try {
        const res = await axios.post("https://checkmateapi-i1gf.onrender.com/login", {
          email: values.email,
          password: values.password
        }, {
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const data = res.data

        setIsLoading(false);
        storeJWT(data.accessToken);

        toast({
          title: data.msg,
          status: "success",
          variant: "left-accent",
          duration: 3000,
          position: "top-right"
        })

        location.replace("/dashboard")

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
            title: "Invalid values provided",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right"
          })
        }

        if(err.response.status === 401){
          return toast({
            title: "Incorrect password",
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
})

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
            <Image src={logo} width={{ base: 200, xl:300 }} margin={"0 auto"} mb={10}/>
            <Text fontSize={"4xl"} fontWeight={700}>
              Sign In
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
                <Box width={"100%"}>
                  <Input
                    type="password"
                    border={"1px solid #a1a1a1"}
                    width={"100%"}
                    placeholder="Password"
                    mt={3}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {
                    formik.touched.password && formik.errors.password ?
                      (
                        <Text color={"red"} fontSize={"sm"}>{formik.errors.password}</Text>
                      ) : null
                  }
                </Box>
                <Text as={link} to="/forgotten-password" color={"blue"} fontSize={"sm"} display={"flex"} justifyContent={"flex-end"} mt={3}>Forgotten password?</Text>
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
                    ) : "Sign In"
                  }
                </Button>
              </form>
            </Box>
            <Text mt={3} textAlign={"center"} fontWeight={500} fontSize={14} mb={{ base:5, lg:0 }}>
              Don't have an account?{" "}
              <Link as={link} to="/signup">
                {" "}
                Sign Up{" "}
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
