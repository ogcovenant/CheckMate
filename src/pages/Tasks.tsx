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
  useDisclosure,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Trash, TickCircle, ExportSquare } from "iconsax-react";
import { Add } from "iconsax-react";
import AddTaskDrawer from "../components/AddTaskDrawer";
import EditTaskDrawer from "../components/EditTaskDrawer";
import { useEffect, useState } from "react";
import { axiosInstance } from "../hooks/useAxios";

const Tasks = () => {
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const { data } = await axiosInstance({
          url: "/tasks",
          method: "get",
        });

        setIsLoading(false);

        setTasks(data.tasks);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setIsLoading(false);

        if (err.response.status === 403) {
          toast({
            title: "User session expired",
            description: "Login to continue",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right",
          });

          location.replace("/login");
        }

        if (err.response.status === 404) {
          setTasks([]);
        }

        toast({
          title: "An unexpected error occured",
          status: "error",
          variant: "left-accent",
          duration: 3000,
          position: "top-right",
        });
      }
    })();
  }, []);

  return (
    <>
      {!isLoading && (
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
                  {tasks.map((task) => {
                    return (
                      <Tr>
                        <Td>{task.title.length > 50 ? task.title.slice(0, 50)+"..." : task.title as string}</Td>
                        <Td>{task.dueDate as string}</Td>
                        <Td textAlign={"center"}>{task.priority as string}</Td>
                        <Td textAlign={"center"}>{task.status as string}</Td>
                        <Td display={"flex"} gap={1}>
                          <TickCircle size="20" color="#37d67a" />
                          <ExportSquare size="20" color="#2ccce4" onClick={onEditOpen} cursor={"pointer"}/>
                          <Trash size="20" color="#fc0303" />
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}
      {
        isLoading && <Spinner/>
      }

      <AddTaskDrawer isOpen={isAddOpen} onClose={onAddClose} />
      <EditTaskDrawer isOpen={isEditOpen} onClose={onEditClose} />
    </>
  );
};

export default Tasks;
