import {
  Box
} from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export const Home = () => {

  return (
    <>
      <Box display={"flex"} backgroundColor={"#ffcc243f"} height={"100vh"} width={"100%"} overflow={"hidden"}>
        <SideBar />
        <Box m={2} backgroundColor={"#fff"} borderRadius={20} width={"85%"} p={5} maxHeight={"99vh"} overflow={"auto"}>  
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Home;
