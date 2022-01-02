const express = require('express');
const connect = require ("./configs/db");
const cors = require('cors')

const userController = require("./controllers/user.controller")

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use("/users", userController);

app.listen(4000, async () => {
    await connect();
    console.log("Listening port 4000");
})
