// Importing express module
import express from "express";

//Importing file creation and files read functions from fs-utils.js file
import { createFile, readFiles } from "./fs-utils.js";

// Initializing express app
const app = express();

//port number of connections to server
const port = 1515;

//API for creating a file in a specific directory
app.post("/create-file", (req, res) => {
  try {
    // Calling the createFile function to create a file which has not in the specified folder
    createFile();
    res.status(200).send({ msg: "File created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating file.");
  }
});

//API for reading all files in a specified folder

app.get("/read-files", (req, res) => {
  try {
    // Calling the readFiles function to read all files in the specified folder
    const files = readFiles("./files");
    res.status(200).send(files);
  } catch (error) {
    res.status(500).send("Error reading files.");
  }
});

app.listen(port, () => {
  console.log(` App Server is running on port ${port}`);
});
