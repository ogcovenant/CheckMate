import { useState, useEffect } from "react";
import getJWT from "../utils/getJWT";
import {
  Box,
  Text,
  Image,
  Input,
  useToast,
  Spinner,
  Button,
} from "@chakra-ui/react";
import onboarding from "../assets/onboarding.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import backendURL from "../utils/getBackendLink";
import axios from "axios";
import logo from "../assets/logo.png";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [isAuth, setIsAuth] = useState(false);
  const params = useParams();

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
      password: "",
      cPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .required("Required"),
      cPassword: Yup.string()
        .required("Passwords do not match")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    }),
    onSubmit: async (values) => {
      
      const resetId = params.id;
      const URL = backendURL();
      setIsLoading(true);

      try {
        const res = await axios.post(
          `${URL}/reset-password`,
          {
            id: resetId,
            password: values.password,
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
          status: "success",
          variant: "left-accent",
          duration: 5000,
          position: "top-right",
        });

        setTimeout(() => {
          location.replace("/login");
        }, 5000);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setIsLoading(false);

        if (err.response.status === 401) {

          toast({
            title: "Reset code is invalid",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right",
          });

          setTimeout(() => {
            location.replace("/forgotten-password")
          })
        }

        if (err.response.status === 406) {
          return toast({
            title: "Invalid values provided",
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
                Reset your Password
              </Text>
              <Text fontSize={"sm"}>
                Enter a new password to continue
              </Text>
              <Box mt={3} width={"100%"}>
                <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                  <Box width={"100%"}>
                    <Input
                      type="password"
                      border={"1px solid #a1a1a1"}
                      width={"100%"}
                      placeholder="Enter new password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Text color={"red"} fontSize={"sm"}>
                        {formik.errors.password}
                      </Text>
                    ) : null}
                  </Box>
                  <Box width={"100%"}>
                    <Input
                      type="password"
                      border={"1px solid #a1a1a1"}
                      width={"100%"}
                      placeholder="Confirm new password"
                      name="cPassword"
                      mt={1}
                      onChange={formik.handleChange}
                      value={formik.values.cPassword}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cPassword && formik.errors.cPassword ? (
                      <Text color={"red"} fontSize={"sm"}>
                        {formik.errors.cPassword}
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
                    {isLoading ? <Spinner /> : "Reset password"}
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {isAuth && goToDashboard()}
    </>
  );
};

export default ResetPassword;
