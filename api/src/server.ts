import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

mongoose
  .connect(process.env.DATABASEURI as string)
  .then(() => {
    const port = 8000;
    app.listen(port, () => {
      console.log(`server is live on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
