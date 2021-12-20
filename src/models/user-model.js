const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: [true, "User ID is required"],
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    speaks: [
      {
        type: [String],
        enum: {
          values: [
            "english",
            "spanish",
            "catalan",
            "german",
            "italian",
            "javascript",
          ],
          message: (props) => `The ${props.value} speak is not valid`,
        },
      },
    ],
  },
  { timestamps: true },
);

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
