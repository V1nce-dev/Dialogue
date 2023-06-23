require('dotenv').config();

const express = require("express")
const app = express()
const userDB = require("./config/userdb")
const port = 8080

userDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/users", require("./routes/users"))

app.listen(port, () => {
    console.log(`running on port ${port}`);
});