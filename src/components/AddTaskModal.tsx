import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  Box, 
  Select,
  Button
} from "@chakra-ui/react"


const AddTaskModal = ({ isOpen, onClose } : { isOpen: boolean, onClose : () => void }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter={"blur(3px)"}/>
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontWeight={700}>Add Task</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box>
              <Input type="text" placeholder="Enter New Task Title" border={"1px solid black"} _hover={{ background:"1px solid black" }}/>
            </Box>
            <Box mt={5} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Text>Choose Task List:</Text>
              <Select placeholder="Select List" width={"50%"} border={"1px solid black"} _hover={{ background:"1px solid black" }}>
                <option value="List 1">List 1</option>
                <option value="List 2">List 2</option>
                <option value="List 3">List 3</option>
                <option value="none">None</option>
              </Select>
            </Box>
            <Box  mt={5} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Text>Due Date</Text>
              <Input type="date" width={"50%"} border={"1px solid black"} _hover={{ background:"1px solid black" }}/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box display={"flex"} gap={3}>
              <Button background={"#ffcc24"} _hover={{ background:"#ffcc24" }}>Add Task</Button>
              <Button backgroundColor="red" color="white" _hover={{ background:"red", color:"white" }}>Cancel</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTaskModal