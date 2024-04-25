import { Box } from "@chakra-ui/react";
import LeftSideBar from "../components/LeftSideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box p={3} display={"flex"}>
        <LeftSideBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Home;
