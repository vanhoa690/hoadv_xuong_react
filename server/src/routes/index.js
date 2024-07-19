import { Router } from "express";
import authRouter from "./auth";
import categoriesRouter from "./categories";
import productsRouter from "./products";
import ordersRouter from "./orders";
import cartsRouter from "./carts";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);
router.use("/carts", cartsRouter);

export default router;
