import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "../Pages/Tasks";
import UserLayout from "../Components/Layouts/UserLayout";
import AddTask from "../Pages/AddTask";
import Completed from "../Pages/Completed";
const Navigations = () => {
  const [active, setActive] = React.useState(0);
  return (
    <Router>
      <UserLayout active={active} setActive={setActive}>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </UserLayout>
    </Router>
  );
};

export default Navigations;
