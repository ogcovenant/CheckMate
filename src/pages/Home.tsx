import {
  Box
} from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {



  return (
    <>
      <Box display={"flex"} overflowY={"hidden"} overflowX={"hidden"} backgroundColor={"#ffcc243f"} height={"100vh"} width={"100%"} overflow={"hidden"}>
        <SideBar />
        <Box m={2} backgroundColor={"#fff"} borderRadius={20}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Home;
