import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddTask = () => {
  const [data, setData] = React.useState({
    title: "",
    description: "",
  });

  const clearData = () => {
    toast.success("Task Added Successfully");
    setData({ title: "", description: "" });
  }


  const add = async () => {
    if (!data.title.trim() || !data.description.trim()) {
      toast.error("Title and Description cannot be empty");
      return;
    }
    try {
      const res = await axios.post(`http://localhost:3000/add`, data);
      res.status === 201 && clearData();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <Typography variant="h2">Add Task</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <FormControl
          style={{
            width: "20rem",
            margin: "auto",
          }}
        >
          <FormLabel className="mt-4" htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <FormHelperText>Enter Title</FormHelperText>
          </FormControl>
        
          <FormControl>
          <FormLabel className="mt-4" htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <FormHelperText>Enter Description</FormHelperText>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {add()}}
            className="mt-4"
          >
            Add
          </Button>
        </FormControl>
      </div>
    </Box>
  );
};

export default AddTask;
