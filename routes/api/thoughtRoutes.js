// NOTE - Activating the express router
const router = require('express').Router();
// NOTE - Importing all thought and reaction controllers
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// NOTE - Routes
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').put(addReaction).delete(deleteReaction);

// NOTE - Exports
module.exports = router;