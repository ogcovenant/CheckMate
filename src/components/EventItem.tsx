import { Box, Text, Flex } from "@chakra-ui/react"
import { Calendar, ArrowRight2, Clock, Location } from "iconsax-react"

const EventItem = ({ onOpen } : { onOpen: () => void } ) => {
  return (
    <>
       <Box w={"full"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottom={"1px solid #00000026"} pb={2} cursor={"pointer"} onClick={onOpen}>
        <Box display={"flex"} gap={3} alignItems={"flex-start"} width={"90%"}>
        <Flex direction={"column"} width={"100%"} gap={2}>
            <Text fontSize={14}>Test Event is just testing testing testing</Text>
            <Box display={"flex"} flexDirection={{ base:"column", md:"row" }}>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={28} textAlign={"center"} borderRight={"1px solid #00000026"}>
                <Clock size="15" color="#000"/>
                <Text fontWeight={500} fontSize={{ base:12 }} color={"#DB0303"}>12:30</Text>
              </Box>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={"200px"} textAlign={"center"} borderRight={"1px solid #00000026"}>
                <Calendar size="15" color="#000" variant="Bold"/>
                <Text fontWeight={500} fontSize={12} color={"green"}>22-04-2024</Text>
              </Box>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} pl={2} textAlign={"center"}>
                <Box>
                   <Location size="15" color="#000" variant="Bold"/>
                </Box>
                <Text fontWeight={500} fontSize={12} color={"#0327DB"}>Area 16, Mainframe Estate, Tigbo ilu, Ogun State, Nigeria</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box display={{ base:"none", md:"block" }}>
          <ArrowRight2 size="28" color="#000" variant="Outline"/>
        </Box>
      </Box>
    </>
  )
}

export default EventItem