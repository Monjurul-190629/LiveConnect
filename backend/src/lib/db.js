import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Successfully connected MongoDB : ${connect.connection.host}`);
  } catch (error) {
    console.log("Errro in MondoDB: ", { error });
    process.exit(1);
  }
};
