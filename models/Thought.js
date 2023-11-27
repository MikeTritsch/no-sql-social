//NOTE - Importing tools from the mongoose node package
const { Schema, model } = require('mongoose');

//NOTE - Importing reactionSchema to be referenced in the model
const reactionSchema = require('./Reaction');

//NOTE - Thought layout
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//NOTE - Formatted date virtual (MM/DD/YYYY)
thoughtSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString("en-US");
});

//NOTE - creating the actual "thought" model based on the thoughtSchema
const Thought = model('thought', thoughtSchema);

//NOTE - Exports
module.exports = Thought;