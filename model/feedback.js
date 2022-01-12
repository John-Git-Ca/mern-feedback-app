const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
    rating:{
      type:String,
      required: true,
    },
    text: {
      type:String,
      required:true,
    },
  },
  {
    timestamps:true,
  }
)

const feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = feedback