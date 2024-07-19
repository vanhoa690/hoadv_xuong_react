import { Router } from "express";
import CartsController from "../controllers/carts";

const cartsRouter = Router();

const cartsController = new CartsController();

cartsRouter.get("/", cartsController.getAllCarts);
cartsRouter.get("/items", cartsController.getAllCarts);
cartsRouter.get("/:id", cartsController.getCartDetail);
cartsRouter.post("/", cartsController.createCart);
cartsRouter.put("/:id", cartsController.updateCart);
cartsRouter.delete("/:id", cartsController.deleteCart);

export default cartsRouter;
