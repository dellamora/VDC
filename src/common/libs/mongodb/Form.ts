// models/User.js

import mongoose from "mongoose";

const Form = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  tag: { type: String, required: true, unique: true },
  cardVariation: { type: Number, required: true },
  members: [
    {
      twitter: { type: String, required: true },
      username: { type: String, required: true },
    },
  ],
  image: { type: String, default: "default" },
});

const FormModel: mongoose.Model<mongoose.Document> =
  mongoose.models.Forms || mongoose.model("Forms", Form);

export default FormModel;
