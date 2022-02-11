import axios from 'axios'
import React from 'react'

export default class AppClass extends React.Component {
  state = {
    x:2,
    y:2,
    steps:0,
    email: "",
    message:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:9000/api/result', this.state)
    .then( res => {
      this.setState({
        ...this.state,
        email: "",
        message: res.data.message
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        ...this.state,
        message: 'Ouch: email is required'
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value
    })
  }

  handleXminus = () => {
    this.state.x >= 2 ? 
    this.setState({...this.state, x: this.state.x - 1, steps: this.state.steps + 1,  message: ''}) :
    this.setState({...this.state, message: "You can't go left"})
  }
  
  handleYadd = () => {
    this.state.y >= 2 ? 
    this.setState({...this.state, y: this.state.y - 1, steps: this.state.steps + 1,  message: ''}) :
    this.setState({...this.state, message: "You can't go up"})
  }
  
  handleXadd = () => {
    this.state.x <= 2  ? 
    this.setState({...this.state, x: this.state.x + 1, steps: this.state.steps + 1,  message: ''}) :
    this.setState({...this.state, message: "You can't go right"})
  }
  
  handleYminus = () => {
    this.state.y <= 2 ? 
    this.setState({...this.state, y: this.state.y + 1, steps: this.state.steps + 1,  message: ''}) :
    this.setState({...this.state, message: "You can't go down"})
  }

  handleReset = () => {
    this.setState({
      ...this.state,
      x:2,
      y:2,
      steps:0,
      email: "",
      message:''
    })
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          <div className = {this.state.x === 1 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className = {this.state.x === 2 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className = {this.state.x === 3 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className = {this.state.x === 1 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className = {this.state.x === 2 && this.state.y === 2 ? "square active" : "square"}>
          {this.state.x === 2 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className = {this.state.x === 3 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className = {this.state.x === 1 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 3 ? "B" : ''}
          </div>

          <div className = {this.state.x === 2 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 3 ? "B" : ''}
          </div>
          
          <div className = {this.state.x === 3 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 3 ? "B" : ''}
          </div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick = {this.handleXminus}>LEFT</button>
          <button id="up" onClick = {this.handleYadd}>UP</button>
          <button id="right" onClick = {this.handleXadd}>RIGHT</button>
          <button id="down" onClick = {this.handleYminus}>DOWN</button>
          <button id="reset" onClick = {this.handleReset}>reset</button>
        </div>
        <form onSubmit = {this.handleSubmit}>
          <input id="email" type="email" placeholder="type email"  value = {this.state.email} onChange = {this.handleChange}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
