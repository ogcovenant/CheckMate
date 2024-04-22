import { Box, Text, Heading } from "@chakra-ui/react"
import TodoContent from "../components/TodoContent"

const Upcoming = () => {
  return (
    <>
      <Box p={5} width={"90%"} height={"95vh"} overflowY={"auto"}>
        <Heading display={"flex"} alignItems={"center"} gap={8}>
          <Text fontSize={"4xl"}>Upcoming</Text>
          <Box border={"2px solid #00000026"} padding={"5px 15px"} borderRadius={8}>
            <Text fontWeight={500}>4</Text>
          </Box>
        </Heading>
        <TodoContent />
      </Box>
    </>
  )
}

export default Upcoming