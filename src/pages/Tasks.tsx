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
} from "@chakra-ui/react";
import { Trash, TickCircle, Edit } from "iconsax-react"

const Tasks = () => {
  const test = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta! Excepturi sit recusandae perferendis, porro consequatur totam et consequuntur dignissimos itaque vitae, obcaecati, ratione deleniti. Esse pariatur tempora reprehenderit debitis."
  const display = test.slice(0, 50) + "..."

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
              placeholder="Search by  name, tags, categories e.t.c."
            />
            <Button border={"1px solid #000"} background={"#fff"} width={60}>
              Filter
            </Button>
          </Box>
        </Heading>
        <Box mt={8} maxHeight={"80vh"} overflow={"auto"} mb={8}>
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
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{display}</Td>
                  <Td>22-03-2024</Td>
                  <Td>High</Td>
                  <Td>Pending</Td>
                  <Td display={"flex"} gap={1}>
                  <TickCircle size="20" color="#37d67a"/>
                  <Edit size="20" color="#2ccce4"/>
                  <Trash size="20" color="#fc0303"/>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Tasks;
