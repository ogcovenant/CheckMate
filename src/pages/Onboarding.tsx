import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as link } from "react-router-dom";
import onboarding from "../assets/onboarding.png";

const Onboarding = () => {
  return (
    <>
      <Box height={"100vh"} display={"flex"} flexDirection={{ base:"column", lg:"row" }} alignItems={{ lg:"center" }} justifyContent={{ base:"center", xl:"space-between" }}>
        <Box
          background={"black"}
          width={{ base:"100%", xl:"49%" }}
          height={{ base:"40vh", md:"100vh", xl:"100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={onboarding} width={{ base:150, md:200, lg:300, xl:400 }} />
        </Box>
        <Box
          width={{ base:"100%", xl:"50%" }}
          height={{ base:"60vh", md:"50vh", xl:"100%" }}
          borderRadius={15}
          display={"flex"}
          p={{ base:2, md:50 }}
        >
          <Box margin={{ base:0, xl:"auto 0" }} position={"relative"} p={{ base:8, lg:35 }}>
            <Text fontSize={{ base:"3xl", md:"6xl" }} fontWeight={700}>
              CheckMate
            </Text>
            <Text fontSize={{ base:14, md:18 }}>
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
            <Text mt={2} textAlign={"center"} fontWeight={500}>
              Already have an account?{" "}
              <Link as={link} to="/login">
                {" "}
                Sign In{" "}
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Onboarding;
