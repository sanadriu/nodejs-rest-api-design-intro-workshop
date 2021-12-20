const mongoose = require("mongoose");

const EditorialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      trim: true,
      unique: true,
    },
    dateOfCreation: {
      type: Date,
      required: [true, "The date of creations is required"],
    },
    publishedBooks: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "book",
      },
    ],
    authors: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const EditorialModel = new mongoose.model("editorial", EditorialSchema);

module.exports = EditorialModel;
