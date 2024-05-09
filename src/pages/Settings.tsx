import { Box, Text, Heading, VStack } from "@chakra-ui/react"
import { ArrowRight2 } from "iconsax-react"

const Settings = () => {
  return (
    <>
      <Box p={3} width={"90%"}>
        <Heading>
          <Text fontSize={"3xl"} fontWeight={700} mt={3}>Settings</Text>
        </Heading>
        <Box mt={5}>
          <VStack gap={5}>
            <Box w={"full"} p={1} pb={3} borderBottom={"1px solid #0000003f"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <Text fontSize={"lg"} fontWeight={600}>Account Settings</Text>
              </Box>
              <ArrowRight2 size="32" color="#000"/>
            </Box>
            <Box w={"full"} p={1} pb={3} borderBottom={"1px solid #0000003f"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <Text fontSize={"lg"} fontWeight={600}>Notification Settings</Text>
              </Box>
              <ArrowRight2 size="32" color="#000"/>
            </Box>
            <Box w={"full"} p={1} pb={3} borderBottom={"1px solid #0000003f"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <Text fontSize={"lg"} fontWeight={600}>Export Data</Text>
              </Box>
              <ArrowRight2 size="32" color="#000"/>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export default Settings