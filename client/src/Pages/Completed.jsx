import React from 'react'
import axios from 'axios'
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";

const Completed = () => {
    const [tasks, setTasks] = React.useState([]);

    const getTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/getcompleted");
            console.log(data);
            setTasks(data);
        }
        catch (error) {
            console.log(error);
        }
    }


    React.useEffect(() => {
        getTasks();
    }, []);

  return (
    <>
    <Box className="mt-4">
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {tasks.map((task, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: "lightgreen",
              }}
              className="p-4 m-2"
            >
              <Typography variant="h5">{task.title}</Typography>
              <Typography variant="body1">{task.description}</Typography>
                
            </Card>
          ))}
        </div>
      </Box></>
  )
}

export default Completed
