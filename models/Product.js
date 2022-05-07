import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [100, "Title must be less than 100 characters"],
      minlength: [5, "Title must be more than 5 characters"],
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: [1000, "Description must be less than 1000 characters"],
      minlength: [10, "Description must be more than 10 characters"],
    },
    toppings: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
    prices: {
      type: [Number],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
