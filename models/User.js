//NOTE - Importing tools from the mongoose node package
const { Schema, model } = require('mongoose');

// NOTE - Email match regex function
var emailMatch = function(email) {
  var emailx =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return emailx.test(email);
}

// NOTE - User layout
const userSchema = new Schema(
  {
    username: { 
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        // NOTE - email match function
        validator: emailMatch,
        message: 'Email validation failed.'
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// NOTE - virtual that returns the length of the friends array
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

//NOTE - creating the actual "user" model based on the userSchema
const User = model('user', userSchema);

// NOTE - Exports
module.exports = User;