const { configDotenv } = require("dotenv");
const express = require("express");
configDotenv();
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`Runing on port ${port}`));
