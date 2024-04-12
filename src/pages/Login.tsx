import { Box, Image, Text, Link, Input, Button } from "@chakra-ui/react";
import { Link as link } from "react-router-dom";
import onboarding from "../assets/onboarding.png";

const Login = () => {
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
          display={"flex"}
          justifyContent={"center"}
          p={50}
        >
          <Box margin={"auto 0"} position={"relative"}>
            <Text fontSize={"4xl"} fontWeight={700}>
              Sign In
            </Text>
            <Box mt={3} width={"100%"}>
              <form style={{ width: "100%" }}>
                <Input
                  type="email"
                  border={"1px solid #a1a1a1"}
                  width={"100%"}
                  placeholder="Email"
                />
                <Input
                  type="password"
                  border={"1px solid #a1a1a1"}
                  width={"100%"}
                  placeholder="Password"
                  mt={3}
                />
                <Button
                  mt={3}
                  background={"#ffcc24"}
                  width={"100%"}
                  _hover={{ backgroundColor: "#ffcc24" }}
                >
                  Sign In
                </Button>
              </form>
              <Text
                mt={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <span
                  style={{
                    backgroundColor: "#a1a1a1",
                    width: "45%",
                    display: "block",
                    height: 1,
                  }}
                ></span>
                or
                <span
                  style={{
                    backgroundColor: "#a1a1a1",
                    width: "45%",
                    display: "block",
                    height: 1,
                  }}
                ></span>
              </Text>
              <Text
                mt={3}
                textAlign={"center"}
                fontSize={"sm"}
                fontWeight={600}
              >
                Continue With
              </Text>
              <Box mt={3} display={"flex"} justifyContent={"space-between"}>
                <Button
                  background={"#ffcc24"}
                  width={"48%"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                  _hover={{ backgroundColor: "#ffcc24" }}
                >
                  Google
                </Button>
                <Button
                  background={"#ffcc24"}
                  width={"48%"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                  _hover={{ backgroundColor: "#ffcc24" }}
                >
                  Facebook
                </Button>
              </Box>
            </Box>
            <Text mt={3} textAlign={"center"} fontWeight={500}>
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
