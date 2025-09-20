import "../../../env.js";
import express from 'express';

const app = express();

const PORT = process.env.PORT;
const URI = process.env.URI;


app.listen(PORT, () => {
  console.log(`Server Started ${URI}`)
}).on("error", (err) => {
  console.error("Server failed to start:", err);
  process.exit(1);
})  
