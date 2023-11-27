// NOTE - Imports
const router = require('express').Router();
const apiRoutes = require('./api');

// NOTE - Route bundling
router.use('/api', apiRoutes);

// NOTE - Error handling
router.use((req, res) => res.send('Wrong route! Please check the route and try again. Do not give up.'));

// NOTE - Exports
module.exports = router;