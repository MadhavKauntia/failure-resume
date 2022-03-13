import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    connection.isConnected = conn.connections[0].readyState;
  } catch (err) {
    console.log(err.message);
  }
};
