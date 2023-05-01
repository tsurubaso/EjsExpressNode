const express = require("express");
const app = express();
const userRouter=require("./routes/user")

const PORT = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  //console.log("tell me all of the essentials")
  res.send("best known than forgotten")
  //res.sendStatus(404);
});

app.use("/user", userRouter);
app.set("view engine", "ejs")



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
