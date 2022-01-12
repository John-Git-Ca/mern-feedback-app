import axios from 'axios'
import { GET_FEEDBACK_SUCCESS } from '../constants/constants'

export const getFeedbacks = () => async (dispatch) => {
  const {data} = await axios.get('/get')

  dispatch({
    type: GET_FEEDBACK_SUCCESS,
    payload: data
  })
}

export const postFeedback = (text, rating) => async (dispatch) => {

  await axios.post('/post', {
    text: text,
    rating: rating,
  })
}

export const deleteFeedback = (id) => async (dispatch) => {
  await axios.delete(`/delete/${id}`)
}