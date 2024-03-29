require('dotenv').config();

const express = require("express")
const app = express()
const userDB = require("./config/userdb")
const port = 8080
const cors = require("cors")

userDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/users/", require("./routes/users"))
app.use("/api/post/", require("./routes/texts"))

app.listen(port, () => {
    console.log(`running on port ${port}`);
});