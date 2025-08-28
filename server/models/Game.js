import mongoose from "mongoose";

const FormQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  type: { type: String, enum: ["text", "multipleChoice"], required: true },
  multipleChoiceOptions: [String], // only used for multipleChoice
});

const FormAnswerSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

const GameSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    system: {
      type: String,
      enum: [
        "D&D 5e",
        "Pathfinder",
        "Call of Cthulhu",
        "Daggerheart",
        "DC20",
        "Other",
      ],
      required: true,
    },
    maxPlayers: { type: Number, required: true },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    form: [FormQuestionSchema],
    formAnswers: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        answers: [FormAnswerSchema],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Game", GameSchema);
