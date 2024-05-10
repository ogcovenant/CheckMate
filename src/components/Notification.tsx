import { Box, Text } from "@chakra-ui/react"
import { TickCircle, ArchiveTick, Trash, Clock, ArrowRotateRight } from "iconsax-react"


const Notification = ({ type } : { type : string}) => {
  return (
    <>
      <Box p={3} width={"95%"} display={"flex"} gap={3} alignItems={"flex-start"} borderBottom={"1px solid #0000002f"}>
        <Box>
          {
            type === "completion" ? <TickCircle size={36} color="green" /> : 
            type === "creation" ? <ArchiveTick size={36} color="green" /> :
            type === "update" ? <ArrowRotateRight size="32" color="blue"/> :
            type === "deletion" ? <Trash size="32" color="red"/> :
            type === "reminder" ? <Clock size="32" color="gold"/> : ""
          }
        </Box>
        <Box display={"flex"} flexDirection={"column"} >
        <Text fontSize={20} fontWeight={600}>Task Completed Successfully</Text>
        <Text fontWeight={400}>You've just completed a task titled: Feed My Dog</Text>
        <Box display={"flex"} gap={3} mt={1}>
          <Text color={"blue"} fontSize={14} cursor={"pointer"}>Mark Incomplete</Text>.
          <Text color={"blue"} fontSize={14} cursor={"pointer"}>Edit Task</Text>.
          <Text color={"red"} fontSize={14} cursor={"pointer"}>Delete Task</Text>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default Notification