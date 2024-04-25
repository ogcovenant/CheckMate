import { Box, Text, Heading } from "@chakra-ui/react";
import StickyNote from "../components/StickyNote";
import { FaPlus } from "react-icons/fa6";

const StickyWall = () => {
  return (
    <>
      <Box p={3} height={"96vh"} overflowY={"auto"}>
        <Heading>
          <Text fontSize={"3xl"}>Sticky Wall</Text>
        </Heading>
        <Box
          mt={5}
          p={5}
          borderRadius={10}
          display={"flex"}
          flexWrap={"wrap"}
          gap={5}
          justifyContent={"flex-start"}
        >
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <StickyNote
            title="Social Media"
            content="Just Testing Sticky Note"
            background="#ff6c6c"
          />
          <Box
            backgroundColor={"#bababa"}
            fontWeight={400}
            p={3}
            borderRadius={10}
            height={200}
            width={220}
            fontSize={"4xl"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <FaPlus />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StickyWall;
