//NOTE - Importing our User and Thought models
const { User, Thought } = require('../models');

module.exports = {

  //SECTION - Thought controllers/routes, labelled literally

  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No Thought found with that ID!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const { thoughtText, username, _id } = req.body;
      const thought = await Thought.create({ thoughtText, username });
      console.log(thought);
      const user = await User.findOneAndUpdate(
        { _id },
        { $addToSet: { thoughts: thought } },
        { new: true }
      );

      if (!user) {
        return res.status(500).json({ message: 'Unable to add thought!'});
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.deleteOne({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No Thought with that ID!' });
      }

      res.json({ message: "Thought deleted!" })
    } catch (err) {
      return res.status(500).jsom(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No Thought with that ID!' });
      }

      res.json(thought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //!SECTION end thoughts

  //SECTION - Reactions

  async addReaction(req, res) {
    try {
      const { reactionBody, username } = req.body;

      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: { reactionBody, username } } },
        // { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(500).json({ message: 'Unable to add reaction. No Thought found with that ID.'})
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {reactionId: req.body.reactionId }}},
        // { runValidators: true, new: true }
    );
    
    if (!thought) {
      return res.status(404).json({ message: 'Unable to remove reaction. Unknown error.' });
      }

      res.json({ message: "Reaction deleted!" })
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

//!SECTION - end reaction