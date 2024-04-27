import { 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  ModalCloseButton,
  Button,
  Input,
  Textarea
} from "@chakra-ui/react"


const AddNoteModal = ({ isOpen, onClose } : { isOpen:boolean, onClose: () => void } ) => {


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter={"blur(3px)"}/>
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontWeight={700}>Add Note:</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box>
              <Input type="text" placeholder="Enter Note Title" border={"1px solid black"} _hover={{ backgroundColor:"1px solid black" }}/>
              <Textarea placeholder="Enter Note Content" border={"1px solid black"} _hover={{ backgroundColor:"1px solid black" }} mt={5} height={200} resize={"none"}/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box display={"flex"} gap={3}>
              <Button background={"#ffcc24"} _hover={{ background:"#ffcc24" }}>Add Note</Button>
              <Button backgroundColor="red" color="white" _hover={{ background:"red", color:"white" }}>Cancel</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddNoteModal