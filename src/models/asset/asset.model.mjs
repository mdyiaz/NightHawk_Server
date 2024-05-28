import { Schema, model } from "mongoose";

const assetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
  },
  resolution: {
    type: String,
  },
  images: {
    type: Array,
  },
  sub_category: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  }
});

export const Asset = model("Asset", assetSchema);