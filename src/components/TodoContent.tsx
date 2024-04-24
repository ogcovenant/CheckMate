import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { Add } from "iconsax-react";
import TodoItem from "./TodoItem";

const TodoContent = () => {

  return (
    <>
      <Box mt={6} width={"full"}>
        <Box className="addTodo">
          <InputGroup width={"100%"}>
            <InputLeftElement>
              <Add size="32" color="black" />
            </InputLeftElement>
            <Input w={"full"} placeholder="Add New Task" />
          </InputGroup>
        </Box>
        <Box className="todoMain" mt={3} p={3}>
          <Stack gap={5}>
            <TodoItem todoName={"Research Content Ideas"} />
            <TodoItem todoName={"Test the development build"} />
            <TodoItem
              todoName={
                "Make changes to the deployment server to ship python build"
              }
            />
            <TodoItem
              todoName={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas dolores ratione error et reprehenderit nam aspernatur voluptates. Exercitationem excepturi, provident voluptatibus sint obcaecati esse ea consequatur sit inventore ullam."
              }
            />
            <TodoItem
              todoName={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas dolores ratione error et reprehenderit nam aspernatur voluptates. Exercitationem excepturi, provident voluptatibus sint obcaecati esse ea consequatur sit inventore ullam."
              }
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default TodoContent;
