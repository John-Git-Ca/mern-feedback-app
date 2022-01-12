import {
  GET_FEEDBACK_SUCCESS, 
  UPDATE_TEXT,
  UPDATE_RATING,
  RESET_TEXT_RATING,
} from '../constants/constants'

export const getFeedbackReducer = (state = {}, action) => {
  switch(action.type){
    case GET_FEEDBACK_SUCCESS:
      return {
        feedbacks: action.payload
      }
    default:
      return state;
  }
}

export const updateContentReducer = (state={text:'',rating:''}, action) => {
  switch(action.type){
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.payload,
      }
    case UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      }
    case RESET_TEXT_RATING:
      return {
        ...state,
        text: '',
        rating: '',
      }
    default:
      return state
  }
}

// export const postContentReducer = (state={}, action) => {
//   switch(action.type){
//     case POST_CONTENT_UPDATE:
//       return {
//         text: action.payload.text,
//         rating: action.payload.text,
//       }
//     default:
//       return state;
//   }
// }