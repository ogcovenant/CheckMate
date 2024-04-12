import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as link } from "react-router-dom";
import onboarding from "../assets/onboarding.png";

const Onboarding = () => {
  return (
    <>
      <Box
        height={"100vh"}
        p={3}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          background={"black"}
          width={"49%"}
          height={"100%"}
          borderRadius={15}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={onboarding} width={300} />
        </Box>
        <Box width={"50%"} height={"100%"} borderRadius={15} display={"flex"} p={50}>
          <Box margin={"auto 0"} position={"relative"} p={35}>
            <Text fontSize={"5xl"} fontWeight={700}> 
              CheckMate
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              nostrum rerum voluptates, iure ullam dolorum nemo amet. Illo
              ducimus nihil possimus aut cumque, quas veniam distinctio dolorum
              dolores provident sint.
            </Text>
            <Link
              as={link}
              fontSize={"md"}
              fontWeight={600}
              to={"/login"}
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
              Already have an account? <Link as={link} to="/login"> Sign In </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Onboarding;
