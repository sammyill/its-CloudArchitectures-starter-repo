
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js inside Docker! 🚀");
});

app.get("/test", (req, res) => {
  res.send("this is test route one,hello i'm node");
});

app.get("/es3",(req,res)=>{
  res.send("All the exsercises have been completed");
})

app.listen(3000, () => console.log("Server running on port 3000"));
