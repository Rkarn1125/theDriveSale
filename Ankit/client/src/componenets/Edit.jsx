import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const [message,setMessage] = useState(false)
  const [student, setStudent] = useState({
    title: "",
    Description: "",
    Priority: "",
    Status: "",
  });
  useEffect(() => {
    async function getStudent() {
      try {
        const students = await axios.get(
          `http://localhost:8000/api/getuser/${id}`
        );
        console.log(students.data);
        setStudent(students.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/updateuser/${id}`, student);
      setMessage(true)
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  return (
    <div className="editcontainer m-4 ">
      <h1 className="container2">Edit student</h1>
      {message ? (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : (
        " "
      )}
      <div className="container5 shadow p-3 mb-5 bg-body rounded">
        <form action="" onSubmit={onFormSubmit}>
          <TextField
            id="filled-basic"
            label="id"
            required
            variant="filled"
            value={id}
            sx={{ width: 80, mb: 2 }}
            disabled
          />
          <TextField
            autoComplete="title"
            name="title"
            variant="outlined"
            required
            id="title"
            label="title"
            value={student.title}
            onChange={(e) => onTextFieldChange(e)}
            sx={{ width: 300, mb: 4 }}
          />
          <br />
          <TextField
            autoComplete="Description"
            name="Description"
            variant="outlined"
            required
            id="Description"
            label="Description"
            value={student.Description}
            onChange={(e) => onTextFieldChange(e)}
            sx={{ width: 380, mb: 4 }}
          />
          <br />
          <TextField
            autoComplete="Priority"
            name="Priority"
            variant="outlined"
            required
            id="Priority"
            label="Priority"
            value={student.Priority}
            onChange={(e) => onTextFieldChange(e)}
            sx={{ width: 380, mb: 4 }}
          />
          <br />
          <TextField
            autoComplete="Status"
            name="Status"
            variant="outlined"
            required
            id="Status"
            label="Status"
            value={student.Status}
            onChange={(e) => onTextFieldChange(e)}
            sx={{ width: 380, mb: 4 }}
          />
          <br />
          <Button type="submit" variant="contained" sx={{ width: 380, mb: 4 }}>
            update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
