import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [searchTerm,setSearchTerm]=useState("");
  const [Data, setData] = useState([]);
  const [message, setMessage] = useState(false);
  const [priority, setPriority] = useState(false);
  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:8000/api/getdata");
        console.log(students.data);
        setData(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/deleteuser/${id}`);
    console.log(id);
    var newstudent = Data.filter((item) => {
      // console.log(item);
      setMessage(true);
      return item._id !== id;
    });
    setData(newstudent);
  };

  let handlePriority = (e) => {
    console.log(e);
    setData((Data) =>
      Data.map((items) =>
        e == items._id ? { ...items, Priority: (items.Priority = "yes") } : items
      )
    );
  };
  let handleStatus = (e) => {
    console.log(e);
    setData((Data) =>
      Data.map((items) =>
        e == items._id ? { ...items, status: (items.status = "completet") } : items
      )
    );
  };
  return (
    <div>
      <div className="mt-5">
     <div className="container p-4">
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>{
          setSearchTerm(event.target.value)
        }}/>
      </div>
      
        <div className="container">
          {message ? (
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          ) : (
            " "
          )}

          <div className="add_btn mt-2 mb-2 ml-4">
            <Link to="/register" className="btn btn-primary">
              Add data
            </Link>
          </div>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">CreatedAt</th>
                <th scope="col">UpdatedAt</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Data.filter((val)=>{
                if (searchTerm==" ") {
                  return val
                }else if(val.Description.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
 
                }
              }).map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <th scope="row">{element.title}</th>
                      <td>{element.Description}</td>
                      <td onClick={() => handlePriority(element._id)}>
                        {element.Priority}
                      </td>
                      <td>{element.createdAt}</td>
                      <td>{element.updatedAt}</td>
                      <td onClick={() => handleStatus(element._id)}>{element.status}</td>
                      <td className="d-flex justify-content-between">
                        <Link to={`view/${element._id}`}>
                          {" "}
                          <button className="btn btn-success">
                            <RemoveRedEyeIcon />
                          </button>
                        </Link>
                        <Link to={`edit/${element._id}`}>
                          {" "}
                          <button className="btn btn-primary">
                            <AddIcon />
                          </button>
                        </Link>
                        <button className="btn btn-danger">
                          <div onClick={() => handleDelete(element._id)}>
                            <DeleteIcon sx={{ m: 1 }} />
                          </div>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
