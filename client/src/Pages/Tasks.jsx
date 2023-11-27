import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);

  const getTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/get");
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setAsCompleted = async (id) => {
    try {
      const { data } = await axios.post(`http://localhost:3000/complete`, {
        id,
      });
      console.log(data);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks ? (
      <Box className="mt-4">
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {tasks.map((task, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: "#8BBFE9",
              }}
              className="p-4 m-2"
            >
              <Typography variant="h5">{task.title}</Typography>
              <Typography variant="body1">{task.description}</Typography>

              <Button
                variant="contained"
                className="mt-4"
                onClick={() => setAsCompleted(task._id)}
              >
                Set as Completed
              </Button>
            </Card>
          ))}
        </div>
      </Box>
      ):(
      <Box className="mt-4 d-flex align-items-center justify-content-center flex-wrap">
        <div className="">
          <Typography variant="h5">No Tasks Found</Typography>
        </div>
      </Box>
      )
 }   </>
  );
};

export default Tasks;
