import {
  Box,
  Text,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea
} from "@chakra-ui/react";
import StickyNote from "../components/StickyNote";
import { FaPlus } from "react-icons/fa6";
import AddNoteModal from "../components/AddNoteModal";


const StickyWall = () => {

  const { onOpen, onClose, isOpen } = useDisclosure()

  const { isOpen: isAddNoteOpen, onClose: onAddNoteClose, onOpen: onAddNoteOpen } = useDisclosure()

  return (
    <>
      <Box p={3} height={"96vh"} overflowY={"auto"}>
        <Heading p={3} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"3xl"}>Sticky Wall</Text>
          <Box>
            <Button 
                backgroundColor={"#ffcc24"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
                _hover={{ backgroundColor: "#ffcc24" }}
                onClick={onAddNoteOpen}
                position={"fixed"}
                bottom={5}
                right={3}
                zIndex={99}><FaPlus />Add Note</Button>
          </Box>
        </Heading>
        <Box
          mt={1}
          p={3}
          borderRadius={10}
          display={"flex"}
          flexWrap={"wrap"}
          gap={3.5}
          justifyContent={"flex-start"}
        >
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
            onOpen = {onOpen}
          />
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter={"blur(3px)"}/>
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontWeight={700}>Edit Note:</Text>
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
              <Button background={"#ffcc24"} _hover={{ background:"#ffcc24" }}>Save Changes</Button>
              <Button backgroundColor="red" color="white" _hover={{ background:"red", color:"white" }}>Delete Note</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AddNoteModal isOpen={isAddNoteOpen} onClose={onAddNoteClose}/>
    </>
  );
};

export default StickyWall;
