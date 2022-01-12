const express = require('express')
const router = express.Router()

const {
  postFeedback, 
  getFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController.js')

const postingFeedback = (req, res) =>{
  res.send('posting')
}
const gettingFeedback = (req, res) =>{
  res.send('getting')
}

const deletingFeedback = (req, res) => {
  res.send('deleting')
}

// router.route('/post').post(postFeedback)
// router.route('/get').get(getFeedback)
// router.route('/delete/:id').delete(deleteFeedback)
router.route('/post').post(postingFeedback)
router.route('/get').get(gettingFeedback)
router.route('/delete/:id').delete(deletingFeedback)

module.exports = router