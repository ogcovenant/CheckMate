import { Box, Text, Flex } from "@chakra-ui/react"
import { Calendar, ArrowRight2, Clock, Location } from "iconsax-react"

const EventItem = ({ onOpen } : { onOpen: () => void } ) => {
  return (
    <>
       <Box w={"full"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottom={"1px solid #00000026"} pb={2} cursor={"pointer"} onClick={onOpen}>
        <Box display={"flex"} gap={3} alignItems={"flex-start"} width={"90%"}>
        <Flex direction={"column"} width={"100%"} gap={2}>
            <Text fontSize={14}>Test Event is just testing testing testing</Text>
            <Box display={"flex"}>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={20} textAlign={"center"} borderRight={"1px solid #00000026"}>
                <Clock size="15" color="#000"/>
                <Text fontWeight={500} fontSize={14} color={"#DB0303"}>12:30</Text>
              </Box>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={32} textAlign={"center"} borderRight={"1px solid #00000026"}>
                <Calendar size="15" color="#000" variant="Bold"/>
                <Text fontWeight={500} fontSize={14} color={"green"}>22-04-2024</Text>
              </Box>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} minWidth={32} pl={2} textAlign={"center"}>
                <Location size="15" color="#000" variant="Bold"/>
                <Text fontWeight={500} fontSize={14} color={"#0327DB"}>Area 16, Mainframe Estate, Tigbo ilu, Ogun State, Nigeria</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <ArrowRight2 size="28" color="#000" variant="Outline"/>
      </Box>
    </>
  )
}

export default EventItem