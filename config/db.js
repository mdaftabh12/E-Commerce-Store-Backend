import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongo_uri =
  `${process.env.MONGO_URI}/${process.env.DB_NAME}` ||
  "mongodb://127.0.0.1:27017/aftabStore";

  console.log(mongo_uri);
const connectDB = async () => {
  try {
    await mongoose
      .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`Successfully connected to MongoDB 👍`);
      });
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
