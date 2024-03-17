import Express from "express";
import Cors from "cors";

import productRouter from "./routes/products";
import userRouter from "./routes/users";

const app = Express();

app.use(Express.json());
app.use(Cors());

app.use("/products", productRouter);
app.use("users/", userRouter);

export default app;
