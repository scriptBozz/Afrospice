import Express from "express";
import Cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import sellerRouter from "./routes/seller";
import orderRouter from "./routes/order";
import { jwtstrategy } from "./config/passport";

const app = Express();

app.use(Express.json());
// app.use(Cors());
app.use(passport.initialize());
passport.use(jwtstrategy)


app.use(
  Cors({
    origin: "https://afrospicefe.onrender.com", // Your front-end URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // If you need to include credentials in requests
  })
);

// Handle preflight requests
app.options("*", Cors());


app.use("/products", productRouter);
app.use("/users", userRouter);
app.use ("/orders", orderRouter);
app.use("/seller", sellerRouter);


export default app;
