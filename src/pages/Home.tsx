import { Box } from "@chakra-ui/react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import { Outlet } from "react-router-dom";
import { RightSideDIsplayProvider } from "../context/RightSideDIsplayContext";

const Home = () => {
  return (
    <>
      <RightSideDIsplayProvider>
      <Box p={3} display={"flex"}>
        <LeftSideBar />
        <Outlet />
        <RightSideBar />
      </Box>
      </RightSideDIsplayProvider>
    </>
  );
};

export default Home;
