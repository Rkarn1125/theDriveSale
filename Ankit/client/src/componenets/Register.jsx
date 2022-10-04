import Home from "./Home";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
function Register() {
  const [message, setMessage] = useState(false);
  const [student, setStudent] = useState({
    title: "",
    Description: "",
    Priority: "",
    status: "",
  });
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    async function getAllStudent() {
      try {
        await axios.post(`http://localhost:8000/api/register`, student);
        setStatus(true);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllStudent();
  };

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setStudent({ ...student, [name]: value });
    console.log(student);
  };
  if (status) {
    return <Home />;
  }
  return (
    <>
      <div className="m-4">
        <h1 className="container2">React CRUD with API call</h1>
        {message ? (
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        ) : (
          " "
        )}
        <div className="row">
          <div className="col container6 shadow rounded m-4">
            <h1 className="header">Add student</h1>
            <form action="" onSubmit={handleSubmit} className="p-4">
              <TextField
                id="outlined-basic"
                label="title"
                name="title"
                variant="standard"
                fullWidth
                sx={{ m: 1 }}
                onChange={handleinput}
              />
              <br />
              <TextField
                size=""
                name="Description"
                id="outlined-basic"
                label="Description"
                variant="standard"
                fullWidth
                sx={{ m: 1 }}
                onChange={handleinput}
                required
              />
              <TextField
                size=""
                name="Priority"
                id="outlined-basic"
                label="Priority"
                variant="standard"
                fullWidth
                sx={{ m: 1 }}
                onChange={handleinput}
                required
              />
              <TextField
                size=""
                name="status"
                id="outlined-basic"
                label="status"
                variant="standard"
                fullWidth
                sx={{ m: 1 }}
                onChange={handleinput}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ m: 1 }}
                required
              >
                Success
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
