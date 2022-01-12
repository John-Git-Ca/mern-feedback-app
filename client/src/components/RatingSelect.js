import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_RATING } from '../constants/constants'

const RatingSelect = () => {

  // const [selected, setSelected] = useState(0)
  const dispatch = useDispatch()
  const {rating} = useSelector(state => state.updateContentReducer)

  const handleChange = (e) => {
    dispatch({
      type: UPDATE_RATING,
      payload: e.target.value,
    })
  }

  return (
    <Container>
      <Button 
        value='1' 
        variant={rating === '1' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          1
      </Button>
      <Button 
        value='2' 
        variant={rating === '2' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          2
      </Button>
      <Button 
        value='3' 
        variant={rating === '3' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          3
      </Button>
      <Button 
        value='4' 
        variant={rating === '4' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          4
      </Button>
      <Button 
        value='5' 
        variant={rating === '5' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          5
      </Button>
      <Button 
        value='6' 
        variant={rating === '6' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          6
      </Button>
      <Button 
        value='7' 
        variant={rating === '7' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          7
      </Button>
      <Button 
        value='8' 
        variant={rating === '8' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          8
      </Button>
      <Button 
        value='9' 
        variant={rating === '9' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          9
      </Button>
      <Button 
        value='10' 
        variant={rating === '10' ? 'success' : 'secondary'} className=' rounded-circle fs-5 m-1 p-0'
        checked={true}
        style={{width: '45px', height:'45px'}} 
        onClick={handleChange}>
          10
      </Button>


    </Container>
  )
}

export default RatingSelect
