// NOTE - Activating the express router
const router = require('express').Router();
// NOTE - Importing all user and friend controllers
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

// NOTE - Routes
router.route('/').get(getUsers).post(createUser);

router.route('/:_id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:_id/friends/:friendsId').put(addFriend).delete(deleteFriend);

// NOTE - Exports
module.exports = router;


