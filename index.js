import express from "express";

// express app
const app = express();

const PORT = 3000;




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });