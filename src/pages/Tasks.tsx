import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure
} from "@chakra-ui/react";
import { Trash, TickCircle, Edit } from "iconsax-react";
import { Add } from "iconsax-react";
import AddTaskDrawer from "../components/AddTaskDrawer";
import EditTaskDrawer from "../components/EditTaskDrawer";

const Tasks = () => {

  const { isOpen: isAddOpen, onOpen :onAddOpen, onClose: onAddClose } = useDisclosure()
  const { isOpen: isEditOpen, onOpen :onEditOpen, onClose: onEditClose } = useDisclosure()

  const test =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta! Excepturi sit recusandae perferendis, porro consequatur totam et consequuntur dignissimos itaque vitae, obcaecati, ratione deleniti. Esse pariatur tempora reprehenderit debitis.";
  const display = test.slice(0, 50) + "...";

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
          <Text fontSize={28}>My Tasks</Text>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Input
              type="text"
              border={"1px solid black"}
              placeholder="Search tasks..."
              width={350}
            />
            <Button border={"1px solid #000"} background={"#fff"} width={32}>
              Filter
            </Button>
          </Box>
        </Heading>
        <Box mt={8} maxHeight={"80vh"} overflow={"auto"} mb={8}>
          <Box
            backgroundColor={"#ffcc24"}
            p={3}
            borderRadius={"50%"}
            width={"60px"}
            height={"60px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            bottom={8}
            right={5}
            cursor={"pointer"}
            onClick={onAddOpen}
          >
            <Add size={38} color="#000" />
          </Box>
          <TableContainer>
            <Table variant={"simple"} textAlign={"center"}>
              <Thead>
                <Tr>
                  <Th>Task</Th>
                  <Th>Due Date</Th>
                  <Th>Priority</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr onClick={onEditOpen}>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr onClick={onEditOpen}>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr onClick={onEditOpen}>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr onClick={onEditOpen}>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr onClick={onEditOpen}>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                    <TickCircle size="20" color="#37d67a" />
                    <Edit size="20" color="#2ccce4" />
                    <Trash size="20" color="#fc0303" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>


      <AddTaskDrawer isOpen={isAddOpen} onClose={onAddClose}  />
      <EditTaskDrawer isOpen={isEditOpen} onClose={onEditClose}  />

    </>
  );
};

export default Tasks;
