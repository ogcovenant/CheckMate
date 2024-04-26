import { Box, Checkbox, Text, Stack } from "@chakra-ui/react";
import { Calendar } from "iconsax-react";
import { ArrowRight2 } from "iconsax-react";

const TodoItem = ({ todoName, onOpen } : { todoName : string, onOpen: () => void }) => {

  return (
    <>
      <Box w={"full"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottom={"1px solid #00000026"} pb={2} cursor={"pointer"}>
        <Box display={"flex"} gap={3} alignItems={"flex-start"} width={"90%"}>
        <Checkbox mt={1} />
        <Stack direction={"column"} onClick={() => {onOpen()}}>
            <Text fontSize={14}>{todoName}</Text>
            <Box display={"flex"}>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={32} textAlign={"center"} borderRight={"1px solid #00000026"}>
                <Calendar size="15" color="#000" variant="Bold"/>
                <Text fontWeight={500} fontSize={14}>22-04-2024</Text>
              </Box>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={28} textAlign={"center"} borderRight={"1px solid #00000026"}>
                <Text fontSize={12} background={"#aaaaaa"} color={"black"} p={1} borderRadius={5} height={6} width={5} display={"flex"} justifyContent={"center"} alignItems={"center"}>1</Text>
                <Text fontWeight={500} fontSize={14}>Subtasks</Text>
              </Box>
              <Box display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} width={28} textAlign={"center"}>
                <Box p={2.5} borderRadius={5} backgroundColor={"#ff5d5d"}></Box>
                <Text fontWeight={500} fontSize={14}>Personal</Text>
              </Box>
            </Box>
          </Stack>
        </Box>
        <ArrowRight2 size="28" color="#000" variant="Outline"/>
      </Box>
    </>
  );
};

export default TodoItem;
