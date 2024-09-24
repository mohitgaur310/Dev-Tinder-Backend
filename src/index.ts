import app from "./app";
import config from "./config";
import { connectToDb } from "./core/scripts/db.connection";

const PORT = config.PORT ?? 8080;

app.listen(PORT, async () => {
  console.log("🚀 ~ app.listen ~ PORT:", `http:/localhost:${PORT}`);
  const isConnected = await connectToDb();
  if (!isConnected) {
    console.log("Process has been terminated due to db connection failure!!");
    process.exit(0);
  }
});
