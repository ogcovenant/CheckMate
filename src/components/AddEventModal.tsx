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
  Textarea,
  Button
} from "@chakra-ui/react"


const AddEventModal = ({ isOpen, onClose } : { isOpen: boolean, onClose : () => void }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter={"blur(3px)"}/>
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontWeight={700}>Add Event</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box>
              <Input type="text" placeholder="Enter New Event Title" border={"1px solid black"} _hover={{ background:"1px solid black" }}/>
            </Box>
            <Box mt={5} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Text>Due Time:</Text>
              <Input type={"time"} width={"70%"} border={"1px solid black"} _hover={{ background:"1px solid black" }}/>
            </Box>
            <Box  mt={5} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Text>Due Date:</Text>
              <Input type="date" width={"70%"} border={"1px solid black"} _hover={{ background:"1px solid black" }}/>
            </Box>
            <Box  mt={5} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Text>Venue:</Text>
              <Textarea height={150} resize={"none"} width={"70%"} border={"1px solid black"} _hover={{ background:"1px solid black" }}/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box display={"flex"} gap={3}>
              <Button background={"#ffcc24"} _hover={{ background:"#ffcc24" }}>Add Event</Button>
              <Button backgroundColor="red" color="white" _hover={{ background:"red", color:"white" }}>Cancel</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddEventModal