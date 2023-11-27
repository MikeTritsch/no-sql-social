//NOTE - Importing Schema and Types from the mongoose node package
const { Schema, Types } = require('mongoose');

//NOTE - Reaction layout
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//NOTE - Formatted date virtual (MM/DD/YYYY)
reactionSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString("en-US");
});

//NOTE - Exports
module.exports = reactionSchema;
