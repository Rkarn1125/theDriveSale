import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudent() {
      try {
        const students = await axios.get(
          `http://localhost:8000/api/getuser/${id}`
        );
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, []);
  return (
    <div className="viewcontainer m-4 shadow p-3 mb-5 bg-body rounded">
      <h1 className="container1">this is view page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">UpdatedAt</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="container4">
            <td>{id}</td>
            <td>{students.title}</td>
            <td>{students.Description}</td>
                      <td>
                        {students.Priority ? (
                          <div>this is true</div>
                        ) : (
                          <div>this is false</div>
                        )}
                      </td>
                      <td>{students.createdAt}</td>
                      <td>{students.updatedAt}</td>
                      <td>
                        {students.status ? (
                          <div>this is true</div>
                        ) : (
                          <div>this is false</div>
                        )}
                      </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
