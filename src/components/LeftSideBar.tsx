import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Button
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { FaListCheck, FaPlus } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { Logout, Setting2 } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleDisplay = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const { isOpen: open, onOpen, onClose } = useDisclosure()

  const [activeTab, setActiveTab] = useState("today")

  return (
    <>
      {isOpen && (
        <Box
          p={5}
          backgroundColor={"#e3e3e3"}
          minWidth={{ base:"100%", md:"35%", lg:"30%" }}
          maxWidth={{ base:"100%", md:"35%", lg:"30%" }}
          borderRadius={15}
          height={"97.5vh"}
          overflowY={"auto"}
          zIndex={999}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"2xl"} fontWeight={700}>
              Menu
            </Text>
            <Box fontSize={"2xl"} cursor={"pointer"} onClick={handleDisplay}>
              <FaBars />
            </Box>
          </Box>
          <Box mt={8}>
            <Text fontSize={"sm"} fontWeight={600}>
              TASKS
            </Text>
            <Box mt={2} width={"100%"}>
              <List>
                <ListItem as={Link} to={"/dashboard"} width={"100%"} display={"flex"} alignItems={"center"} mb={1} backgroundColor={ activeTab === "today" ? "#7b7b7b" : "" } color={ activeTab === "today" ? "white" : "" } borderRadius={ activeTab === "today" ? "10": "" }  _hover={ activeTab !== "today" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("today")}}>
                  <ListIcon pl={2} fontSize={"2xl"}><FaListCheck /></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>Today</Text>
                    <Box
                      backgroundColor={"#bababa"}
                      p={0.5}
                      borderRadius={3}
                      width={6}
                      textAlign={"center"}
                    >
                      <Text fontWeight={500} fontSize={"sm"}>
                        4
                      </Text>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem as={Link} to={"/dashboard/tomorrow"} width={"100%"} display={"flex"} alignItems={"center"} mb={1} backgroundColor={ activeTab === "tomorrow" ? "#7b7b7b" : "" } color={ activeTab === "tomorrow" ? "white" : "" } borderRadius={ activeTab === "tomorrow" ? "10": "" }  _hover={ activeTab !== "tomorrow" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {} } onClick={() => {setActiveTab("tomorrow")}}>
                  <ListIcon pl={2} fontSize={"2xl"}><FaListCheck /></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>Tomorrow</Text>
                    <Box
                      backgroundColor={"#bababa"}
                      p={0.5}
                      borderRadius={3}
                      width={6}
                      textAlign={"center"}
                    >
                      <Text fontWeight={500} fontSize={"sm"}>
                        4
                      </Text>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem as={Link} to={"/dashboard/this-week"} width={"100%"} display={"flex"} mb={1} alignItems={"center"} backgroundColor={ activeTab === "this-week" ? "#7b7b7b" : "" } color={ activeTab === "this-week" ? "white" : "" } borderRadius={ activeTab === "this-week" ? "10": "" }  _hover={ activeTab !== "this-week" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("this-week")}}>
                  <ListIcon pl={2} fontSize={"2xl"}><FaListCheck /></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>This Week</Text>
                    <Box
                      backgroundColor={"#bababa"}
                      p={0.5}
                      borderRadius={3}
                      width={6}
                      textAlign={"center"}
                    >
                      <Text fontWeight={500} fontSize={"sm"}>
                        4
                      </Text>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem as={Link} to={"/dashboard/events"} width={"100%"} display={"flex"} mb={1} alignItems={"center"} backgroundColor={ activeTab === "events" ? "#7b7b7b" : "" } color={ activeTab === "events" ? "white" : "" } borderRadius={ activeTab === "events" ? "10": "" }  _hover={ activeTab !== "events" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("events")}}>
                  <ListIcon pl={2} fontSize={"2xl"}><IoCalendarNumber /></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>Events</Text>
                  </Box>
                </ListItem>
                <ListItem as={Link} to={"/dashboard/sticky-wall"} width={"100%"} display={"flex"} mb={1} alignItems={"center"} backgroundColor={ activeTab === "sticky-wall" ? "#7b7b7b" : "" } color={ activeTab === "sticky-wall" ? "white" : "" } borderRadius={ activeTab === "sticky-wall" ? "10": "" }  _hover={ activeTab !== "sticky-wall" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("sticky-wall")}}>
                  <ListIcon pl={2} fontSize={"2xl"}><FaStickyNote /></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>Sticky Wall</Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box mt={8}>
            <Text fontSize={"sm"} fontWeight={600}>
              LISTS
            </Text>
            <Box mt={2} width={"100%"}>
              <List>
                <ListItem as={Link} to={"/dashboard/list"} width={"100%"} display={"flex"} alignItems={"center"} mb={1} backgroundColor={ activeTab === "list1" ? "#7b7b7b" : "" } color={ activeTab === "list1" ? "white" : "" } borderRadius={ activeTab === "list1" ? "10": "" }  _hover={ activeTab !== "list1" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("list1")}}>
                  <ListIcon
                    as={Box}
                    borderRadius={5}
                    p={2.5}
                    backgroundColor={"#f21212"}
                    ml={2}
                  ></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>List 1</Text>
                    <Box
                      backgroundColor={"#bababa"}
                      p={0.5}
                      borderRadius={3}
                      width={6}
                      textAlign={"center"}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        4
                      </Text>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem as={Link} to={"/dashboard/list"} width={"100%"} display={"flex"} alignItems={"center"} mb={1} backgroundColor={ activeTab === "list2" ? "#7b7b7b" : "" } color={ activeTab === "list2" ? "white" : "" } borderRadius={ activeTab === "list2" ? "10": "" }  _hover={ activeTab !== "list2" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("list2")}}>
                  <ListIcon
                    as={Box}
                    borderRadius={5}
                    p={2.5}
                    backgroundColor={"#16ffff"}
                    ml={2}
                  ></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>List 2</Text>
                    <Box
                      backgroundColor={"#bababa"}
                      p={0.5}
                      borderRadius={3}
                      width={6}
                      textAlign={"center"}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        6
                      </Text>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem as={Link} to={"/dashboard/list"} width={"100%"} display={"flex"} alignItems={"center"} mb={1} backgroundColor={ activeTab === "list3" ? "#7b7b7b" : "" } color={ activeTab === "list3" ? "white" : "" } borderRadius={ activeTab === "list3" ? "10": "" }  _hover={ activeTab !== "list3" ? { backgroundColor:"#cfcfcf", color:"black", borderRadius:10 } : {}} onClick={() => {setActiveTab("list3")}}>
                  <ListIcon
                    as={Box}
                    borderRadius={5}
                    p={2.5}
                    backgroundColor={"#c61fff"}
                    ml={2}
                  ></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>List 3</Text>
                    <Box
                      backgroundColor={"#bababa"}
                      p={0.5}
                      borderRadius={3}
                      width={6}
                      textAlign={"center"}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        11
                      </Text>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  mt={1}
                  width={"100%"} display={"flex"} alignItems={"center"} cursor={"pointer"} mb={1} _hover={{ backgroundColor:"#cfcfcf", color:"black", borderRadius:10 }}
                  onClick={onOpen}
                >
                  <ListIcon pl={2} fontSize={"2xl"}><FaPlus /></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={2}
                  >
                    <Text>Add New List</Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box mt={20} fontWeight={"500"}>
          <Box as={Link} to={"/dashboard/settings"} display={"flex"} gap={3} mt={3} alignItems={"center"}>
              <Text>
                <Setting2 size="20"/>
              </Text>
              <Text>Settings</Text>
            </Box>
            <Box cursor={"pointer"} display={"flex"} gap={3} mt={3} alignItems={"center"}>
              <Text>
                <Logout size="20"/>
              </Text>
              <Text>Sign Out</Text>
            </Box>
          </Box>
        </Box>
      )}
      {!isOpen && (
        <Box
          fontSize={"2xl"}
          mt={8}
          w={"10%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <FaBars cursor={"pointer"} onClick={handleDisplay} />
        </Box>
      )}

      <Modal isOpen={open} onClose={onClose} size={"xl"} scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter={"blur(3px)"}/>
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontWeight={700}>Add New List:</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box display={"flex"} justifyContent={"center"} gap={3} alignItems={"center"}>
              <Text fontWeight={600}>List Color:</Text>
              <Input type="color" p={0} width={"50%"} border={"none"} cursor={"pointer"}/>
            </Box>
            <Box mt={5}>
              <Input type="text" placeholder="Enter List Name" border={"1px solid black"} _hover={{ backgroundColor:"1px solid black" }}/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box display={"flex"} gap={3}>
              <Button background={"#ffcc24"} _hover={{ background:"#ffcc24" }}>Add List</Button>
              <Button backgroundColor="red" color="white" _hover={{ background:"red", color:"white" }}>Cancel</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftSideBar;
