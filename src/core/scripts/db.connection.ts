import mongoose from "mongoose";

import config from "../../config";

let isConnnected: boolean = false;

export const connectToDb = async () => {
  try {
    if (isConnnected) {
      console.log("Using existing MongoDB connection");
      return isConnnected;
    }
    const MONOG_URL = config.MONGODB_CONNECTION_URL;
    await mongoose.connect(MONOG_URL as string);
    isConnnected = true;
    console.log("Connected to MongoDB database");
    return isConnnected;
  } catch (error) {
    console.error("Error connecting to MongoDB database:", error);
    throw error;
  }
};

// export function getDatabaseConnection() {

// }
