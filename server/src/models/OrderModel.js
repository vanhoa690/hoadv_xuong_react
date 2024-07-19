import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    notes: {
      type: String,
    },
    products: {
      type: [Schema.Types.ObjectId],
      ref: "OrderItem",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
