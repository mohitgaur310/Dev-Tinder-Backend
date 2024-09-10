import express from "express";
import cors from "cors";
import config from "./config";

const app = express();

import routes from "./app/routes/index";
app.use("/v1/api", routes);
export default app;
