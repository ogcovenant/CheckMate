import { Box, Heading, Text } from "@chakra-ui/react"
import TodoContent from "./TodoContent"

const Today = () => {
  return (
    <>
      <Box border={"1px solid #9292922f"} p={3} borderRadius={20} height={"50vh"} overflowY={"auto"}>
        <Heading display={"flex"} alignItems={"center"} gap={3}>
          <Text fontSize={"2xl"}>Today</Text>
          <Box border={"2px solid #00000026"} padding={"3px 10px"} borderRadius={8}>
            <Text fontWeight={500} fontSize={"xl"}>12</Text>
          </Box>
        </Heading>
        <TodoContent />
      </Box>
    </>
  )
}

export default Today