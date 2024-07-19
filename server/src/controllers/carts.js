import { StatusCodes } from "http-status-codes";
import Cart from "../models/CartModel";
import ApiError from "../utils/ApiError";

class CartsController {
  // GET /carts
  async getAllCarts(req, res, next) {
    try {
      const carts = await Cart.find();
      res.status(StatusCodes.OK).json(carts);
    } catch (error) {
      next(error);
    }
  }
  // GET /carts/:id
  async getCartDetail(req, res, next) {
    try {
      const cart = await Cart.findById(req.params.id).populate("category");
      if (!cart) throw new ApiError(404, "Cart Not Found");
      res.status(StatusCodes.OK).json(cart);
    } catch (error) {
      next(error);
    }
  }
  // POST /carts
  async createCart(req, res, next) {
    try {
      const cart = await Cart.findOne({
        product: req.body.product,
        user: req.body.user,
      });
      if (cart) {
        await Cart.findByIdAndUpdate(
          cart._id,
          { quantity: cart.quantity + req.body.quantity },
          {
            new: true,
          }
        );
      } else {
        await Cart.create(req.body);
      }
      res.status(StatusCodes.CREATED).json({
        message: "Add Cart Successfull",
      });
    } catch (error) {
      next(error);
    }
  }
  // PUT /carts/:id
  async updateCart(req, res, next) {
    try {
      const updateCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updateCart) throw new ApiError(404, "Cart Not Found");

      res.status(StatusCodes.OK).json({
        message: "Update Cart Successfull",
        data: updateCart,
      });
    } catch (error) {
      next(error);
    }
  }
  // DELETE /carts/:id
  async deleteCart(req, res, next) {
    try {
      const cart = await Cart.findByIdAndDelete(req.params.id);
      if (!cart) throw new ApiError(404, "Cart Not Found");
      res.status(StatusCodes.OK).json({
        message: "Delete Cart Done",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CartsController;
