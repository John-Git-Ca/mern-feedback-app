const Feedback = require('../model/feedback.js')

const postFeedback = async (req, res) =>{
  const {text, rating} = req.body

  const feedback = new Feedback({
    text: text,
    rating: rating,
  })

  const createdFeedback = await feedback.save()
  res.status(201).json(createdFeedback)
}

const getFeedback = async (req, res) => {
  const feedbacks = await Feedback.find({})
  res.json(feedbacks)
}

const deleteFeedback = async (req, res) => {
  await Feedback.deleteOne({_id: req.params.id})
  res.json({message: 'feedback removed'})
}

module.exports = {
  postFeedback,
  getFeedback,
  deleteFeedback,
}