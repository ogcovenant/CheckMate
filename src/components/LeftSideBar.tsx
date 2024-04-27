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
import { Logout } from "iconsax-react";
import { useState } from "react";

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

  return (
    <>
      {isOpen && (
        <Box
          p={5}
          backgroundColor={"#e3e3e3"}
          minWidth={"20%"}
          maxWidth={"20%"}
          borderRadius={15}
          height={"96vh"}
          overflowY={"auto"}
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
                <ListItem width={"100%"} display={"flex"} alignItems={"center"}>
                  <ListIcon as={FaListCheck}></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                <ListItem width={"100%"} display={"flex"} alignItems={"center"}>
                  <ListIcon as={FaListCheck}></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                <ListItem width={"100%"} display={"flex"} alignItems={"center"}>
                  <ListIcon as={FaListCheck}></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                <ListItem
                  mt={1}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ListIcon as={IoCalendarNumber} size={35}></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
                  >
                    <Text>Events</Text>
                  </Box>
                </ListItem>
                <ListItem
                  mt={1}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ListIcon as={FaStickyNote} size={35}></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                <ListItem width={"100%"} display={"flex"} alignItems={"center"}>
                  <ListIcon
                    as={Box}
                    borderRadius={5}
                    p={2.5}
                    backgroundColor={"#f21212"}
                  ></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                <ListItem
                  mt={1}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ListIcon
                    as={Box}
                    borderRadius={5}
                    p={2.5}
                    backgroundColor={"#16ffff"}
                  ></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                <ListItem
                  mt={1}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ListIcon
                    as={Box}
                    borderRadius={5}
                    p={2.5}
                    backgroundColor={"#c61fff"}
                  ></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
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
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={onOpen}
                >
                  <ListIcon as={FaPlus}></ListIcon>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                    p={1}
                  >
                    <Text>Add New List</Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box mt={20} fontWeight={"500"}>
            <Box display={"flex"} gap={3} mt={3} alignItems={"center"}>
              <Text>
                <Logout size="20" />
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
