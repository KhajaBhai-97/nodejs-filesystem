//npm for filesystem
import fs from "fs";

//file creation method
let createFile = () => {
  try {
    //check if the "files" folder already exists or not
    if (!fs.existsSync("files")) {
      //create a new folder with the name of "files"
      fs.mkdirSync("files");
      console.log("Folder created!");
    }

    //define the path where the file will be created
    let filePath = "./files";

    //define the name of the file to be created
    let fileName = `${new Date().toString().split(":").join("-")}`;

    //define the content written to the file
    let content = `${Date.now()}`;

    //create a new file and written the content to the created file
    fs.writeFileSync(`${filePath}/${fileName}.txt`, `${content}`, (err) => {
      if (err) throw err;
      console.log(`${fileName} File created!`);
    });
  } catch (error) {
    throw error;
  }
};

//Read the files from the specified directory

let readFiles = (dirPath) => {
  try {
    //read all files in the specified directory
    let files = fs.readdirSync(dirPath);
    return files;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//export the methods for creating and reading files
export { createFile, readFiles };
