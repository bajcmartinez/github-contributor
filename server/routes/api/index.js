var router = require('express').Router();

router.use('/repos', require('./repos'));

module.exports = router;