const express = require('express')
const router = express.Router()

const {
  postFeedback, 
  getFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController.js')

router.route('/post').post(postFeedback)
router.route('/get').get(getFeedback)
router.route('/delete/:id').delete(deleteFeedback)

module.exports = router