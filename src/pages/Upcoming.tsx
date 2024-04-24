import { Box, Text, Heading } from "@chakra-ui/react"
import Today from "../components/Today"
import Tomorrow from "../components/Tomorrow"
import ThisWeek from "../components/ThisWeek"

const Upcoming = () => {
  return (
    <>
      <Box p={5} width={"90%"} height={"95vh"} overflowY={"auto"}>
        <Heading display={"flex"} alignItems={"center"} gap={8}>
          <Text fontSize={"3xl"}>Upcoming</Text>
        </Heading>
        <Box mt={5}>
          <Today />
          <Box display={"flex"} mt={3} gap={"5"} flexWrap={"wrap"}>
            <Tomorrow />
            <ThisWeek />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Upcoming