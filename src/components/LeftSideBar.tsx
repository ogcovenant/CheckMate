import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { FaAnglesRight, FaListCheck, FaPlus } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { Setting5, Logout } from "iconsax-react";

const LeftSideBar = () => {
  return (
    <>
      <Box
        p={5}
        backgroundColor={"#e3e3e3"}
        width={"20%"}
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
          <Box fontSize={"2xl"} cursor={"pointer"}>
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
                <ListIcon as={FaAnglesRight}></ListIcon>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                  p={1}
                >
                  <Text>Upcoming</Text>
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
                      12
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
                  <Text>Calendar</Text>
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
        <Box mt={8}>
          <Text fontSize={"sm"} fontWeight={600}>
            TAGS
          </Text>
          <Box mt={2} width={"100%"}>
            <List display={"flex"} gap={2} flexWrap={"wrap"}>
              <ListItem
                width={"16"}
                backgroundColor={"#3df16440"}
                textAlign={"center"}
                p={1}
                borderRadius={5}
              >
                <Text fontWeight={600} fontSize={"sm"}>
                  Tag 1
                </Text>
              </ListItem>
              <ListItem
                width={"16"}
                backgroundColor={"#ef2ab440"}
                textAlign={"center"}
                p={1}
                borderRadius={5}
              >
                <Text fontWeight={600} fontSize={"sm"}>
                  Tag 2
                </Text>
              </ListItem>
              <ListItem
                width={"16"}
                backgroundColor={"#214fc440"}
                textAlign={"center"}
                p={1}
                borderRadius={5}
              >
                <Text fontWeight={600} fontSize={"sm"}>
                  Tag 3
                </Text>
              </ListItem>
              <ListItem
                width={"16"}
                backgroundColor={"#12345640"}
                textAlign={"center"}
                p={1}
                borderRadius={5}
              >
                <Text fontWeight={600} fontSize={"sm"}>
                  Tag 4
                </Text>
              </ListItem>
              <ListItem
                width={"30"}
                backgroundColor={"#cfcfcf"}
                textAlign={"center"}
                px={3}
                py={1}
                borderRadius={5}
                display={"flex"}
                alignItems={"center"}
              >
                <ListIcon as={FaPlus}></ListIcon>
                <Text fontWeight={600} fontSize={"sm"}>
                  Add Tag
                </Text>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box mt={20}>
          <Box display={"flex"} gap={3} alignItems={"center"}>
            <Text>
            <Setting5 size="25"/>
            </Text>
            <Text>Settings</Text>
          </Box>
          <Box display={"flex"} gap={3} mt={3} alignItems={"center"}>
            <Text>
            <Logout size="25"/>
            </Text>
            <Text>Sign Out</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftSideBar;
