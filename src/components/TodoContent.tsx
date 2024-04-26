import {
  Box,
  Stack
} from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoContent = ({ onOpen }: { onOpen: () => void } ) => {

  return (
    <>
      <Box mt={6} width={"full"}>
        <Box className="todoMain" mt={3} p={3}>
          <Stack gap={5}>
            <TodoItem todoName={"Research Content Ideas"} onOpen={onOpen}/>
            <TodoItem todoName={"Test the development build"} onOpen={onOpen}/>
            <TodoItem
              todoName={
                "Make changes to the deployment server to ship python build"
              }
              onOpen={onOpen}
            />
            <TodoItem
              todoName={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas dolores ratione error et reprehenderit nam aspernatur voluptates. Exercitationem excepturi, provident voluptatibus sint obcaecati esse ea consequatur sit inventore ullam."
              }
              onOpen = {onOpen}
            />
            <TodoItem
              todoName={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas dolores ratione error et reprehenderit nam aspernatur voluptates. Exercitationem excepturi, provident voluptatibus sint obcaecati esse ea consequatur sit inventore ullam."
              }
              onOpen = {onOpen}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default TodoContent;
