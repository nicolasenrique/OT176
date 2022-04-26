var express = require('express');
var router = express.Router();
const validate = require('../middlewares/validate');
const commentsControllers = require('../controllers/commentsControllers')
const commentValidator = require('../validations/comments');
/* POST comments. */
router.post('/', validate(commentValidator), commentsControllers.createComment);

module.exports = router;