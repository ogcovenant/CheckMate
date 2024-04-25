import { Box, Heading, Text } from "@chakra-ui/react"
import TodoContent from "../components/TodoContent"


const ThisWeek = () => {
  return (
    <>
      <Box p={5} minWidth={"50%"} maxWidth={"90%"} height={"95vh"} overflowY={"auto"}>
        <Heading display={"flex"} alignItems={"center"} gap={8}>
          <Text fontSize={"3xl"}>This Week</Text>
          <Box border={"2px solid #00000026"} padding={"5px 15px"} borderRadius={8}>
            <Text fontWeight={500}>12</Text>
          </Box>
        </Heading>
        <TodoContent />
      </Box>
    </>
  )
}

export default ThisWeek