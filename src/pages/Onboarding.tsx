import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as link } from "react-router-dom";
import onboarding from "../assets/onboarding.png";

const Onboarding = () => {
  return (
    <>
      <Box height={"100vh"} display={"flex"} justifyContent={"space-between"}>
        <Box
          background={"black"}
          width={"49%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={onboarding} width={400} />
        </Box>
        <Box
          width={"50%"}
          height={"100%"}
          borderRadius={15}
          display={"flex"}
          p={50}
        >
          <Box margin={"auto 0"} position={"relative"} p={35}>
            <Text fontSize={"5xl"} fontWeight={700}>
              CheckMate
            </Text>
            <Text>
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
