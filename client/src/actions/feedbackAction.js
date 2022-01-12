import axios from 'axios'
import { GET_FEEDBACK_SUCCESS } from '../constants/constants'

export const getFeedbacks = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/get')
  
    dispatch({
      type: GET_FEEDBACK_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    console.log(error)
  }
}

export const postFeedback = (text, rating) => async (dispatch) => {
  try {
    
    await axios.post('/post', {
      text: text,
      rating: rating,
    })
  } catch (error) {
    
    console.log(error)
  }
}

export const deleteFeedback = (id) => async (dispatch) => {
  try {
    
    await axios.delete(`/delete/${id}`)
  } catch (error) {
    console.log(error)
  }
}