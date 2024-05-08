import {
  Box,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Select,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import TodoContent from "../components/TodoContent";
import { FaPlus } from "react-icons/fa6";
import SubtaskTodoItem from "../components/SubtaskTodoItem";
import AddTaskModal from "../components/AddTaskModal";

const Today = () => {

  const { isOpen, onClose, onOpen } = useDisclosure()

  const { isOpen: isAddOpen, onClose: onAddClose, onOpen: onAddOpen } = useDisclosure()

  return (
    <>
        <Box
          p={5}
        >
          <Heading
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"} gap={{ base:3, md:8 }}>
              <Text fontSize={"3xl"}>Today</Text>
              <Box
                border={"2px solid #00000026"}
                padding={"5px 15px"}
                borderRadius={8}
              >
                <Text fontWeight={500}>12</Text>
              </Box>
            </Box>
            <Box>
              <Button
                backgroundColor={"#ffcc24"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
                _hover={{ backgroundColor: "#ffcc24" }}
                onClick={onAddOpen}
                position={"fixed"}
                bottom={5}
                right={3}
                zIndex={99}
              >
                <FaPlus />
                <Text>Add Task</Text>
              </Button>
            </Box>
          </Heading>
          <TodoContent onOpen={onOpen} />
        </Box>   

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter={"blur(3px)"}/>
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontWeight={700}>Task:</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box>
              <Input type="text" border={"1px solid black"} _hover={{ border:"1px solid black" }} value={"Research content ideas"}/>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={5} alignItems={"center"}>
              <Text>Due Date:</Text>
              <Input type="date" width={"50%"} border={"1px solid black"} _hover={{ border:"1px solid black" }}/>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={5} alignItems={"center"}>
              <Text>List:</Text>
              <Select width={"50%"} border={"1px solid black"} _hover={{ border:"1px solid black" }}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Box>
            <Box mt={5}>
              <Text fontSize={"3xl"} fontWeight={700}>Subtasks:</Text>
              <Box>
                <InputGroup mt={3}>
                  <InputLeftElement>
                    <FaPlus />
                  </InputLeftElement>
                  <Input type="text" border={"1px solid black"} _hover={{ border:"1px solid black" }} placeholder="Add New Subtask"/>
                </InputGroup>
              </Box>
              <Box p={5}>
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
                <SubtaskTodoItem todoName="Testing" />
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box display={"flex"} gap={3}>
              <Button background={"#ffcc24"} _hover={{ background:"#ffcc24" }}>Save Changes</Button>
              <Button backgroundColor="red" color="white" _hover={{ background:"red", color:"white" }}>Delete Task</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AddTaskModal isOpen={isAddOpen} onClose={onAddClose}/>
    </>
  );
};

export default Today;
