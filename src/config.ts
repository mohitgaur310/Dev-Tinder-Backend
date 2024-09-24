import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
  PORT: number | undefined;
  MONGODB_CONNECTION_URL: string | undefined;
}

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL
      ? process.env.MONGODB_CONNECTION_URL
      : "",
  };
};

const config = getConfig();

export default config;
