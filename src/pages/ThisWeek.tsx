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
  useDisclosure
} from "@chakra-ui/react";
import TodoContent from "../components/TodoContent"
import { FaPlus } from "react-icons/fa6"


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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Event</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Text>Testing</Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ThisWeek