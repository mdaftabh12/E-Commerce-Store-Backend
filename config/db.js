import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aftabStore";

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri).then(() => {
      console.log("Successfully connected to MongoDB 👍");
    });
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
