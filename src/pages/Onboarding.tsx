import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as link } from "react-router-dom";
import onboarding from "../assets/onboarding.png";
import logo from "../assets/logo.png";
import getJWT from "../utils/getJWT";
import { useEffect, useState } from "react";

const Onboarding = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = getJWT();

    if (token) {
      setIsAuth(true);
    }
  }, []);

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
            height={{ base: "60vh", md: "50vh", xl: "100%" }}
            borderRadius={15}
            display={"flex"}
            p={{ base: 2, md: 50 }}
            mb={20}
          >
            <Box
              margin={{ base: 0, xl: "auto 0" }}
              position={"relative"}
              p={{ base: 8, lg: 35 }}
            >
              <Image
                src={logo}
                width={{ base: 200, xl: 300 }}
                display={"flex"}
                justifyContent={"center"}
              />
              <Text fontSize={{ base: 14, md: 18 }} textAlign={"justify"}>
                Your stress-free productivity solution. Simplify your tasks,
                reduce stress, and boost productivity with ease. Experience the
                peace of organized efficiency today.
              </Text>
              <Link
                as={link}
                fontSize={"md"}
                fontWeight={600}
                to={"/signup"}
                mt={3}
                display={"block"}
                background={"#ffcc24"}
                p={3}
                textAlign={"center"}
                borderRadius={10}
                _hover={{ textDecoration: "none" }}
              >
                Get Started
              </Link>
              <Text
                mt={2}
                textAlign={"center"}
                fontWeight={500}
                fontSize={{ base: 12, md: 14 }}
              >
                Already have an account?{" "}
                <Link as={link} to="/login">
                  {" "}
                  Sign In{" "}
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      )}
      {isAuth && goToDashboard()}
    </>
  );
};

export default Onboarding;
