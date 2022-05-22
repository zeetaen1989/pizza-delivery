import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: [50, "Title cannot be more than 50 characters"],
      minlength: [3, "Title must be at least 3 characters"],
      required: [true, "Title is required"],
      unique: true,
    },
    img: {
      type: String,
      required: [true, "Image is required"],
    },
    description: {
      type: String,
      maxlength: [1000, "Description cannot be more than 1000 characters"],
      minlength: [3, "Description must be at least 3 characters"],
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    toppings: {
      type: [
        {
          text: { type: String, required: [true, "Toppings are required"] },
          price: {
            type: Number,
            required: [true, "Price for each toppings are required"],
          },
        },
      ],
    },
    prices: {
      type: [Number],
      required: [true, "Prices are required"],
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
