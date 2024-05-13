import { Box, Image, List, ListItem, ListIcon, Text, VStack } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import { TaskSquare, Notification, Setting, LogoutCurve, TickCircle } from "iconsax-react"
import { deleteJWT } from "../utils/storeJWT";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

export const SideBar = () => {

  const webLocation = useLocation();
  const lastPath = webLocation.pathname;

  const logout = () => {
    deleteJWT();
    location.replace("/login")
  }

  return (
    <>
      <Box width={"15%"} as={VStack} justify={"space-between"}>
        <Box>
        <Image src={logo} p={5} width={200}/>
        <Box mt={2} fontSize={16} fontWeight={500} p={2}>
          <List spacing={2} w={"full"}>
            <ListItem display={"flex"} as={Link} to={"/dashboard"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} backgroundColor={ lastPath === "/dashboard" ? "#e3e3e3cf" : "" }> 
              <ListIcon as={TaskSquare}/>
              <Text>My Tasks</Text>
            </ListItem>
            <ListItem display={"flex"} as={Link} to={"/dashboard/completed"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} backgroundColor={ lastPath === "/dashboard/completed" ? "#e3e3e3cf" : "" }> 
              <ListIcon as={TickCircle}/>
              <Text>Completed</Text>
            </ListItem>
            <ListItem display={"flex"} as={Link} to={"/dashboard/notifications"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} backgroundColor={ lastPath === "/dashboard/notifications" ? "#e3e3e3cf" : "" }> 
              <ListIcon as={Notification}/>
              <Text>Notifications</Text>
            </ListItem>
            <ListItem display={"flex"} as={Link} to={"/dashboard/settings"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} backgroundColor={ lastPath === "/dashboard/settings" ? "#e3e3e3cf" : "" }> 
              <ListIcon as={Setting}/>
              <Text>Settings</Text>
            </ListItem>
          </List>
        </Box>
        </Box>
        <Box display={"flex"} fontSize={16} fontWeight={500} gap={2} p={2} my={10} cursor={"pointer"} onClick={logout}>
          <Text as={LogoutCurve}></Text>
          <Text>Logout</Text>
        </Box>
      </Box>
    </>
  )
}

export default SideBar;