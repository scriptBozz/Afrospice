import { Router } from "express";
import passport from "passport";

import {
  createOrder,
  getOrderListByUserId,
} from "../controller/order";

const router = Router();

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  createOrder
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getOrderListByUserId
);

export default router;
