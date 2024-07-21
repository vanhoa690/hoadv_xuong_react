import { Router } from "express";
import authRouter from "./auth";
import productsRouter from "./products";
import cartsRouter from "./carts";
import ordersRouter from "./orders";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
router.use("/orders", ordersRouter);

export default router;
