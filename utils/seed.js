// NOTE - SEED FUNCTIONALITY (run node utils/seed.js from the root)
const connection = require('../config/connection');
const { User, Thought, reactionSchema } = require('../models');
const { userData, thoughtData } = require('./data.js');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected!');

  const userCollectionExists = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCollectionExists.length) {
    await User.collection.drop();
  }

  const thoughtCollectionExists = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCollectionExists.length) {
    await Thought.collection.drop();
  }

  await User.insertMany(userData);
  await Thought.insertMany(thoughtData);

  console.table(userData);
  console.info('Seeding complete! 🤝');
  connection.close();
});









