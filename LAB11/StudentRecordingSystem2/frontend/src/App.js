import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css"; // Make sure to import the CSS for styling

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("http://localhost:3000/api/students");
    setStudents(response.data);
  };

  const addStudent = async (formData) => {
    await axios.post("http://localhost:3000/api/students", formData);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <>
      <video autoPlay muted loop id="bgVideo">
        <source src="/ptcbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <h1>Student Recording System</h1>
        <StudentForm addStudent={addStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </div>
    </>
  );
};

export default App;
