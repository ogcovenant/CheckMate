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
  InputGroup,
  Select,
  InputLeftElement
} from "@chakra-ui/react";
import TodoContent from "../components/TodoContent"
import { FaPlus } from "react-icons/fa6"
import SubtaskTodoItem from "../components/SubtaskTodoItem";


const ThisWeek = () => {

  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Box p={5} minWidth={"50%"} maxWidth={"90%"} height={"95vh"} overflowY={"auto"}>
        <Heading display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={8} alignItems={"center"}>
            <Text fontSize={"3xl"}>This Week</Text>
            <Box border={"2px solid #00000026"} padding={"5px 15px"} borderRadius={8}>
              <Text fontWeight={500}>12</Text>
            </Box>
          </Box>
          <Box>
            <Button backgroundColor={"#ffcc24"} display={"flex"} alignItems={"center"} gap={2} _hover={{ backgroundColor: "#ffcc24" }}><FaPlus />Add Task</Button>
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
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ThisWeek