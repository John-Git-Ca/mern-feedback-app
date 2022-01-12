import React, {useState, useEffect} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {FiDelete} from 'react-icons/fi'
import RatingSelect from './RatingSelect'
import { useDispatch, useSelector } from 'react-redux'

import { deleteFeedback, getFeedbacks, postFeedback } from '../actions/feedbackAction'
import { RESET_TEXT_RATING, UPDATE_TEXT } from '../constants/constants'


const FeedbackForm = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')


  const dispatch = useDispatch()
  const feedbacksReducer = useSelector(state => state.getFeedbackReducer)

  const updateContentReducer = useSelector(state => state.updateContentReducer)

  const {text, rating} = updateContentReducer

  const {feedbacks} = feedbacksReducer

  const handleTextChange = (e) => {
    dispatch({
      type: UPDATE_TEXT,
      payload: e.target.value,
    })
    if((text && text.length >= 10) && rating){
      setBtnDisabled(false)
      setMessage('')
    }
    else if((text && text.length < 10) && rating){
      setMessage('Text must be at least 10 characters...')
      setBtnDisabled(true)
    }
    else{
      setMessage('')
      setBtnDisabled(true)
    }
  }

  const handleSubmit = () => {
    dispatch(postFeedback(text, rating))
    dispatch({type: RESET_TEXT_RATING})
    dispatch(getFeedbacks())
  }
  
  const handleDelete =(id) => {
    dispatch(deleteFeedback(id))
    dispatch(getFeedbacks())
  }

  
  useEffect(() => {
    dispatch(getFeedbacks())
    // console.log({text, rating})
  }, [dispatch])



  return (
      <Form className='m-auto mt-5 text-center p-3 border rounded fs-4 w-50'>
        <Form.Label>How do you rate your experience with us?</Form.Label>
        <Container>
          <RatingSelect/>
        </Container>
        <Container>
          <Row>
            <Col sm={10} xs={10}>
              <Form.Control 
              className='d-inline' placeholder='Write a review...'
              value={text}
              onChange={handleTextChange}
              >
              </Form.Control>
            </Col>
            <Col sm={2} xs={2}>
              <Button 
              className='d-inline'
              disabled={btnDisabled}
              onClick={handleSubmit}
              >Send</Button>
            </Col>
          </Row>
          {message && <Row className='mb-3 text-danger border-bottom'>{message}</Row>}
        </Container>
        <Container>
          {
            feedbacks && feedbacks.map(feedback => (
              <Row key={feedback._id} className='my-1'>
                <Col sm={8} sx={8} 
                style={{textAlign:'left'}}
                className='border-bottom'
                >{feedback.text}</Col>
                <Col sm={2} sx={2} className='border-bottom'>{feedback.rating}</Col>
                <Col sm={1} sx={1} className='border-bottom'>
                  <Button variant='danger' onClick={()=>handleDelete(feedback._id)}>
                    <FiDelete size={20}/>
                  </Button>
                  </Col>
              </Row>
            ))
          }
        </Container>
      </Form>
  )
}

export default FeedbackForm
