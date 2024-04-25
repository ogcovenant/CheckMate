import {
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  Select,
  InputLeftElement,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";
import { Add } from "iconsax-react";
import SubtaskTodoItem from "./SubtaskTodoItem";
import { useRightSideBar } from "../context/RightSideDIsplayContext";

const RightSideBar = () => {

  const {isOpen, setIsOpen, type } = useRightSideBar()

  return (
    <>
      {isOpen && type!=="event" && (
        <Box
          minWidth={"28%"}
          backgroundColor={"#e3e3e3"}
          borderRadius={18}
          p={5}
          height={"96vh"}
          overflowY={"hidden"}
          ml={5}
        >
          <Heading
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"xl"} fontWeight={700}>
              Task:
            </Text>
            <Text fontSize={"2xl"} cursor={"pointer"} onClick={() => {setIsOpen(false)}}>
              <FaXmark />
            </Text>
          </Heading>
          <Box mt={5} height={"83.5%"} overflow={"auto"} p={2}>
            <Input
              border={"1px solid #929292"}
              value={"Renew driver license"}
              fontSize={14}
            />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={5}
            >
              <Text fontSize={14}>List:</Text>
              <Select borderColor={"#929292"} width={200} fontSize={14}>
                <option value="personal">Personalisation</option>
                <option value="work">Work</option>
                <option value="family">Family</option>
              </Select>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={3}
            >
              <Text fontSize={14}>Due Date:</Text>
              <Input
                type="date"
                width={200}
                border={"1px solid #929292"}
                fontSize={14}
              />
            </Box>
            <Box mt={5}>
              <Text fontSize={"2xl"} fontWeight={700}>
                Subtasks:
              </Text>
              <InputGroup mt={5}>
                <InputLeftElement>
                  <Add size="30" color="#000" variant="Outline" />
                </InputLeftElement>
                <Input
                  border={"1px solid #929292"}
                  placeholder="Add New Subtask"
                  width={"90%"}
                />
              </InputGroup>
              <Box mt={1} p={3}>
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
                <SubtaskTodoItem todoName={"Recieve MOney"} />
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} mt={2} p={3}>
            <ButtonGroup spacing={5}>
              <Button
                variant={"outline"}
                border={"1px solid black"}
                p={3}
                _hover={{
                  backgroundColor: "red",
                  border: "1px solid red",
                  color: "white",
                }}
              >
                Delete Task
              </Button>
              <Button
                p={3}
                background={"#ffcc24"}
                _hover={{ backgroundColor: "#ffcc24" }}
              >
                Save Changes
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      )}
      {
        isOpen && type==="event" && (
          <Box
            minWidth={"18%"}
            backgroundColor={"#e3e3e3"}
            borderRadius={18}
            p={5}
            height={"96vh"}
            overflowY={"hidden"}
            ml={5}
          >
            <Text>Hi</Text>
          </Box>
        )
      }
    </>
  );
};

export default RightSideBar;
