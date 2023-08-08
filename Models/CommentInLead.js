import mongoose from "mongoose";

const commentInLeadSchema = new mongoose.Schema(
  {
    LeadId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "LeadModel",
    },
    
    Employee: {
      type: mongoose.Schema.ObjectId,
      ref: 'employee',
      required:true,
    },
    Comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("CommentInLead", commentInLeadSchema);

export default CommentModel;