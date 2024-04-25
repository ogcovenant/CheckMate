import { Box, Text, Heading, Button, Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"
import EventItem from "../components/EventItem"
import { useRightSideBar } from "../context/RightSideDIsplayContext"

const Events = () => {

  const { setType, setIsOpen } = useRightSideBar()

  return (
    <>
      <Box p={5} width={"90%"} height={"96vh"} overflow={"auto"}>
        <Heading display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"3xl"}>Events</Text>
          <Button display={"flex"} gap={2} alignItems={"center"} backgroundColor={"#ffcc24"} _hover={{ backgroundColor:"#ffcc24" }}><FaPlus />Add Event</Button>
        </Heading>
        <Box>
          <Box mt={5}>
            <InputGroup>
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input type="text" placeholder="Search for event"/>
            </InputGroup>
          </Box>
        </Box>
        <Box p={5}>
          <VStack gap={3}>
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
            <EventItem setType={setType} setIsOpen={setIsOpen} />
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export default Events