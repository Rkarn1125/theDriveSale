import express from "express";
const router = express.Router();
import dataModel from "../models/dataSchema.mjs";

//router.get("/api",(req,res)=>{
//   res.json("server start again")
//});

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { title, Description, Priority, status } = req.body;

  if (!title || !Description || !Priority || !status) {
    res.status(422).json("plz fill the data");
  }

  try {
    const adduser = new dataModel({
      title,
      Description,
      Priority,
      status,
    });

    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
  } catch (error) {
    res.json(error);
  }
});

// get userdata

router.get("/getdata", async (req, res) => {
  try {
    const getdata = await dataModel.find();
    res.status(201).json(getdata);
    console.log(getdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const getindividual = await dataModel.findById({ _id: id });
    console.log(getindividual);
    res.status(201).json(getindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update user data

router.put("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateddata = await dataModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateddata);
    res.status(201).json(updateddata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletdata = await dataModel.findByIdAndDelete({ _id: id });
    console.log(deletdata);
    res.status(201).json(deletdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

export default router;
