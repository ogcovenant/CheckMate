import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  Input,
  Text,
  Select,
  Textarea,
} from "@chakra-ui/react";

const EditTaskDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Box>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Edit Task</DrawerHeader>

            <DrawerBody mt={5}>
              <Box>
                <Input
                  type="text"
                  placeholder="Enter task title"
                  value={"research content ideas"}
                  border={"1px solid black"}
                />
              </Box>
              <Box
                mt={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text fontWeight={300} fontSize={20} display={"flex"}>
                  <label htmlFor="dueDate">Due Date:</label>
                  <Text color={"red"}>*</Text>
                </Text>
                <Input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  border={"1px solid black"}
                  value={"2024-05-12"}
                  width={"300"}
                />
              </Box>
              <Box
                mt={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text fontWeight={300} fontSize={20} display={"flex"}>
                  <label htmlFor="dueDate">Priority:</label>
                  <Text color={"red"}>*</Text>
                </Text>
                <Select border={"1px solid black"} width={190} value={"high"}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Select>
              </Box>
              <Box>
                <Textarea
                  placeholder="Add a note (optional)"
                  value="Testing Testing"
                  border={"1px solid black"}
                  mt={8}
                  resize={"none"}
                  height={200}
                />
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                backgroundColor="#ffcc24"
                _hover={{ backgroundColor: "#ffcc24" }}
              >
                Save Changes
              </Button>
              <Button
                backgroundColor={"red"}
                color={"white"}
                ml={3}
                _hover={{ background: "red" }}
              >
                Delete Task
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default EditTaskDrawer;
