const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
    reactions: [{ ref: [reactionSchema]}],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString("en-US");
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;