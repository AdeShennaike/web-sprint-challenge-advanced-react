import React, {useState} from 'react'
import axios from 'axios'

export default function AppFunctional(props) {
  const [state, setState] = useState({
    x:2,
    y:2,
    steps:0,
    email: "",
    message:''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:9000/api/result', state)
    .then( res => {
      setState({
        ...state,
        email: "",
        message: res.data.message
      })
    })
    .catch(err => {
      console.log(err)
      setState({
        ...state,
        message: 'Ouch: email is required'
      })
    })
  }

  const handleChange = (e) => {
    setState({
      ...state,
      email: e.target.value
    })
  }

  const handleXminus = () => {
    state.x >= 2 ? 
    setState({...state, x: state.x - 1, steps: state.steps + 1,  message: ''}) :
    setState({...state, message: "You can't go left"})
  }
  
  const handleYadd = () => {
    state.y >= 2 ? 
    setState({...state, y: state.y - 1, steps: state.steps + 1,  message: ''}) :
    setState({...state, message: "You can't go up"})
  }
  
  const handleXadd = () => {
    state.x <= 2 ? 
    setState({...state, x: state.x + 1, steps: state.steps + 1,  message: ''}) :
    setState({...state, message: "You can't go right"})
  }
  
  const handleYminus = () => {
    state.y <= 2 ? 
    setState({...state, y: state.y + 1, steps: state.steps + 1,  message: ''}) :
    setState({...state, message: "You can't go down"})
  }

  const handleReset = () => { 
    setState({
      ...state,
      x:2,
      y:2,
      steps:0,
      email: "",
      message:''
    })
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
          <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
          <h3 id="steps">You moved {state.steps} times</h3>
        </div>
        <div id="grid">
          <div className = {state.x === 1 && state.y === 1 ? "square active" : "square"}>
            {state.x === 1 && state.y === 1 ? "B" : ''}
          </div>

          <div className = {state.x === 2 && state.y === 1 ? "square active" : "square"}>
            {state.x === 2 && state.y === 1 ? "B" : ''}
          </div>

          <div className = {state.x === 3 && state.y === 1 ? "square active" : "square"}>
            {state.x === 3 && state.y === 1 ? "B" : ''}
          </div>

          <div className = {state.x === 1 && state.y === 2 ? "square active" : "square"}>
            {state.x === 1 && state.y === 2 ? "B" : ''}
          </div>

          <div className = {state.x === 2 && state.y === 2 ? "square active" : "square"}>
          {state.x === 2 && state.y === 2 ? "B" : ''}
          </div>

          <div className = {state.x === 3 && state.y === 2 ? "square active" : "square"}>
            {state.x === 3 && state.y === 2 ? "B" : ''}
          </div>

          <div className = {state.x === 1 && state.y === 3 ? "square active" : "square"}>
            {state.x === 1 && state.y === 3 ? "B" : ''}
          </div>

          <div className = {state.x === 2 && state.y === 3 ? "square active" : "square"}>
            {state.x === 2 && state.y === 3 ? "B" : ''}
          </div>
          
          <div className = {state.x === 3 && state.y === 3 ? "square active" : "square"}>
            {state.x === 3 && state.y === 3 ? "B" : ''}
          </div>
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick = {handleXminus}>LEFT</button>
          <button id="up" onClick = {handleYadd}>UP</button>
          <button id="right" onClick = {handleXadd}>RIGHT</button>
          <button id="down" onClick = {handleYminus}>DOWN</button>
          <button id="reset" onClick = {handleReset}>reset</button>
        </div>
        <form onSubmit = {handleSubmit}>
          <input id="email" type="email" placeholder="type email" value = {state.email} onChange = {handleChange}></input>
          <input id="submit" type="submit"></input>
        </form>
    </div>
  )
}
