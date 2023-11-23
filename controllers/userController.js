const { User, Thought } = require('../models');

module.exports = {

  //SECTION - User routes

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params._id })

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID!'});
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      console.log(user);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params._id });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID!'})
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      // NOTE - Bonus - delete all associated thoughts
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with that ID!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // !SECTION - End main user routes 


  // SECTION - Friend routes
  // REVIEW - Unsure if these are correct

  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params._id },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $addToSet: { friends: req.params._id }},
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'Unable to add friend. No user exists with that ID.' });
      }

      res.json({user, newFriend});
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async deleteFriend(req, res) {
      try {
        const user = await User.findOneAndDelete(
          { _id: req.params._id },
          { $pull: { friend: { userId: req.params.userId }}},
          { runValidators: true, new: true }
        );

        if (!user) {
          return res.status(404).json({ message: 'Unable to remove friend. No user exists with that ID.' });
        }

        res.json({ message: "Now you see me, now you don't"});
      } catch (err) {
        res.status(500).json(err);
      }
    }
  };

  //!SECTION End friend routes