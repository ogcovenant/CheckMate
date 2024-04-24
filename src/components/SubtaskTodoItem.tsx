import { Box, Checkbox, Text } from "@chakra-ui/react"

const SubtaskTodoItem = ( { todoName } : {todoName : string} ) => {
  return (
    <>
      <Box w={"full"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} pb={2}>
        <Box display={"flex"} gap={3} alignItems={"flex-start"} width={"90%"}>
        <Checkbox mt={1} borderColor={"black"}>
        <Text fontSize={14}>{todoName}</Text>
        </Checkbox>
        </Box>
      </Box>
    </>
  )
}

export default SubtaskTodoItem