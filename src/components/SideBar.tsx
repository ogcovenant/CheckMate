import { Box, Image, List, ListItem, ListIcon, Text, VStack } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import { Calendar, TaskSquare, Notification, Setting, LogoutCurve } from "iconsax-react"
import { deleteJWT } from "../utils/storeJWT";
// import { useLocation } from 'react-router-dom';

const SideBar = () => {

  // const location = useLocation();
  // const lastPath = location.pathname;

  // console.log(lastPath)

  const logout = () => {
    deleteJWT();
    location.replace("/login")
  }

  return (
    <>
      <Box width={"25%"} as={VStack} justify={"space-between"}>
        <Box>
        <Image src={logo} p={5}/>
        <Box mt={2} fontSize={16} fontWeight={500} p={2}>
          <List spacing={2} w={"full"}>
            <ListItem display={"flex"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} _hover={{ backgroundColor:"#e3e3e36f" }}> 
              <ListIcon as={TaskSquare}/>
              <Text>Tasks</Text>
            </ListItem>
            <ListItem display={"flex"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} _hover={{ backgroundColor:"#e3e3e36f" }}> 
              <ListIcon as={Calendar}/>
              <Text>Calendar</Text>
            </ListItem>
            <ListItem display={"flex"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} _hover={{ backgroundColor:"#e3e3e36f" }}> 
              <ListIcon as={Notification}/>
              <Text>Notifications</Text>
            </ListItem>
            <ListItem display={"flex"} alignItems={"center"} p={2} borderRadius={8} m={2} cursor={"pointer"} _hover={{ backgroundColor:"#e3e3e36f" }}> 
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

export default SideBar