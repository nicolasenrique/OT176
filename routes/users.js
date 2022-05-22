const express = require('express');

const router = express.Router();
const authAdmin = require('../middlewares/authAdmin');
const {
  userList,
  signup,
  login,
  userEdit,
  getData,
  userDelete,
} = require('../controllers/userController');
const userValidation = require('../validations/user');
const upload = require('../utils/multer');
const awsImageUploader = require('../utils/awsImageUploader');
const userAuth = require('../middlewares/authenticated');
const imageValidator = require('../validations/image');
const authenticated = require('../middlewares/authenticated');
const authOwnership = require('../middlewares/authOwnership');

// router.use(express.json());

// User list
router.get('/users', authAdmin, userList);

// User edit
router.patch('/users/:id', userAuth, upload('image'), imageValidator, awsImageUploader, userEdit);

// User get data
router.get('/auth/me', getData);

// User register
router.post('/auth/signup', userValidation.signup, signup);

// User login
router.post('/auth/login', userValidation.login, login);

// User delete
router.delete('/:id', authenticated, authOwnership('User'), userDelete);

module.exports = router;
