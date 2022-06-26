const router = require('express').Router();
const { getAllUsers } = require('../controllers/user.controllers');

router.get('/', getAllUsers);

module.exports = router;
