const Feedback = require('../model/feedback.js')

const postFeedback = async (req, res) =>{
  try {
    const {text, rating} = req.body
  
    const feedback = new Feedback({
      text: text,
      rating: rating,
    })
  
    const createdFeedback = await feedback.save()
    res.status(201).json(createdFeedback)
  } catch (error) {
    res.status(404).send('error when posting')
  }
}

const getFeedback = async (req, res) => {
  try {
    
    const feedbacks = await Feedback.find({})
    res.json(feedbacks)
  } catch (error) {
    res.send('error when getting')
  }
}

const deleteFeedback = async (req, res) => {
  try {
    
    await Feedback.deleteOne({_id: req.params.id})
    res.json({message: 'feedback removed'})
  } catch (error) {
    res.send('error when deleting')
  }
}

module.exports = {
  postFeedback,
  getFeedback,
  deleteFeedback,
}