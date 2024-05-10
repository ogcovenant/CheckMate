import { Box, Heading, Text } from "@chakra-ui/react";
import Notification from "../components/Notification";

const Notifications = () => {
  return (
    <>
      <Box maxHeight={"100%"} overflow={"hidden"}>
        <Heading
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderBottom={"1px solid #0000002f"}
          p={5}
          maxHeight={"20%"}
        >
          <Text fontSize={28}>Notifications</Text>
        </Heading>
        <Box mt={8} maxHeight={"80vh"} overflow={"auto"} mb={8}>
          <Notification type="creation" />
          <Notification type="update"/>
          <Notification type="completion"/>
          <Notification type="deletion"/>
          <Notification type="reminder"/>
          <Notification type="creation"/>
        </Box> 
      </Box>
    </>
  );
};

export default Notifications;
