import {
  Box,
  Text,
  Heading,
  Button,
  Input,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Textarea
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import EventItem from "../components/EventItem";
import AddEventModal from "../components/AddEventModal";

const Events = () => {

  const {
    isOpen: isAddOpen,
    onClose: onAddClose,
    onOpen: onAddOpen,
  } = useDisclosure();

  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Box p={5} width={"90%"} height={"96vh"} overflow={"auto"}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={"3xl"}>Events</Text>
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
            Add Event
          </Button>
        </Heading>
        <Box p={5}>
          <VStack gap={5}>
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
            <EventItem onOpen={onOpen} />
          </VStack>
        </Box>
      </Box>

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

      <AddEventModal isOpen={isAddOpen} onClose={onAddClose} />
    </>
  );
};

export default Events;
