const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-Middleware')
router.route('/users').get(authMiddleware,adminController.getAlluser);
router.route('/contacts').get(adminController.getAllcontacts);

module.exports = router