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
  useToast,
  Spinner
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosInstance } from "../hooks/useAxios";
import { useState } from "react";

const AddTaskDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  const toast = useToast();

  const [ isLoading, setIsLoading ] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      dueDate: "",
      priority: "",
      note: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .min(5, "Task title cannot be less than 5 characters"),
      dueDate: Yup.date()
        .required("Due date is required")
        .min(new Date(), "Due date cannot be earlier than today"),
      priority: Yup.string().required("You need to set the task's priority"),
      note: Yup.string().optional(),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);



      try{
        const { data } = await axiosInstance({
          url: "/tasks/add",
          method: "post",
          data: {
            title: values.title,
            dueDate: values.dueDate,
            priority: values.priority,
            note: encodeURIComponent(values.note)
          }
        })

        setIsLoading(false)

        toast({
          title: data.msg,
          status: "success",
          variant: "left-accent",
          duration: 3000,
          position: "top-right",
        })

        values.title = ""
        values.dueDate = ""
        values.priority = ""
        values.note = ""
        onClose()


      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(err : any){
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

          location.replace("/login")
        }

        if (err.response.status === 406) {
          return toast({
            title: "Invalid values provided",
            status: "warning",
            variant: "left-accent",
            duration: 3000,
            position: "top-right",
          });
        }

        toast({
          title: "An unexpected error occured",
          status: "error",
          variant: "left-accent",
          duration: 3000,
          position: "top-right",
        });
      }
    },
  });

  return (
    <>
      <Box>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create A New Task</DrawerHeader>

            <form onSubmit={formik.handleSubmit}>
              <DrawerBody mt={5}>
                <Box>
                  <Input
                    type="text"
                    placeholder="Enter task title"
                    border={"1px solid black"}
                    name="title"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <Text color={"red"} fontSize={"small"}>
                      {formik.errors.title}
                    </Text>
                  ) : null}
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
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                  >
                    <Input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      border={"1px solid black"}
                      width={"300"}
                      value={formik.values.dueDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.dueDate && formik.errors.dueDate ? (
                      <Text color={"red"} fontSize={"small"}>
                        {formik.errors.dueDate}
                      </Text>
                    ) : null}
                  </Box>
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
                  <Box display={"flex"} flexDirection={'column'} alignItems={"flex-end"}>
                  <Select
                    border={"1px solid black"}
                    width={220}
                    name="priority"
                    id="priority"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Select a priority level"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Select>
                  {formik.touched.priority && formik.errors.priority ? (
                    <Text color={"red"} fontSize={"small"}>
                      {formik.errors.priority}
                    </Text>
                  ) : null}
                  </Box>
                </Box>
                <Box>
                  <Textarea
                    placeholder="Add a note (optional)"
                    name="note"
                    id="note"
                    border={"1px solid black"}
                    mt={8}
                    resize={"none"}
                    height={200}
                    value={formik.values.note}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.note && formik.errors.note ? (
                    <Text color={"red"} fontSize={"small"}>
                      {formik.errors.note}
                    </Text>
                  ) : null}
                </Box>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  backgroundColor="#ffcc24"
                  _hover={{ backgroundColor: "#ffcc24" }}
                  type="submit"
                  disabled={isLoading}
                >
                  {
                    isLoading ? <Spinner/> : "Add Task"
                  }
                </Button>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default AddTaskDrawer;
