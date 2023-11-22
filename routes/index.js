const router = requier('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route! Please check the route and try again. Do not give up.'));

module.exports = router;