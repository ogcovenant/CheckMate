import {
  Box,
  Image,
  Text,
  Input,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import logo from "../assets/logo.png";
import onboarding from "../assets/onboarding.png";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import backendURL from "../utils/getBackendLink";
import getJWT from "../utils/getJWT";
import { Link } from "react-router-dom";

const ForgottenPassword = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = getJWT();

    if (token) {
      setIsAuth(true);
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      const URL = backendURL();
      setIsLoading(true);

      try {
        const res = await axios.post(
          `${URL}/forgotten-password`,
          {
            email: values.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = res.data;

        setIsLoading(false);

        toast({
          title: data.msg,
          description: "Check your email",
          status: "success",
          variant: "left-accent",
          duration: 3000,
          position: "top-right",
        });

        location.replace("/login");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setIsLoading(false);

        if (err.response.status === 404) {
          return toast({
            title: "User does not exist",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right",
          });
        }

        if (err.response.status === 406) {
          return toast({
            title: "Invalid email provided",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right",
          });
        }

        toast({
          title: "An unexpected error occured",
          status: "error",
          variant: "left-accent",
          duration: 3000,
          position: "top-right",
        });
      }
    },
  });

  const goToDashboard = () => {
    location.replace("/dashboard");
  };

  return (
    <>
      {!isAuth && (
        <Box
          height={"100vh"}
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ base: "center", xl: "space-between" }}
        >
          <Box
            background={"black"}
            width={{ base: "100%", lg: "40vh", xl: "49%" }}
            height={{ base: "40vh", md: "100vh", xl: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={onboarding}
              width={{ base: 150, md: 200, lg: 300, xl: 400 }}
            />
          </Box>
          <Box
            width={{ base: "100%", lg: "60vh", xl: "50%" }}
            height={{ base: "60vh", lg: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            p={50}
            mb={20}
          >
            <Box margin={"auto 0"} position={"relative"} width={"100%"}>
              <Image
                src={logo}
                width={{ base: 200, xl: 300 }}
                margin={"0 auto"}
                mb={10}
              />
              <Text fontSize={"4xl"} fontWeight={700}>
                Forgot your Password?
              </Text>
              <Text fontSize={"sm"}>
                Enter your email below and if an account is associated with the
                email, a password reset link will be sent
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
                    {formik.touched.email && formik.errors.email ? (
                      <Text color={"red"} fontSize={"sm"}>
                        {formik.errors.email}
                      </Text>
                    ) : null}
                  </Box>
                  <Button
                    mt={3}
                    background={"#ffcc24"}
                    width={"100%"}
                    _hover={{ backgroundColor: "#ffcc24" }}
                    type="submit"
                  >
                    {isLoading ? <Spinner /> : "Send Reset Link"}
                  </Button>
                </form>
              </Box>
              <Text as={Link} to={"/login"} color={"blue"} fontSize={"sm"} display={"flex"} justifyContent={"flex-end"} mt={3}>Go back to login</Text>
            </Box>
          </Box>
        </Box>
      )}
      {isAuth && goToDashboard()}
    </>
  );
};

export default ForgottenPassword;
