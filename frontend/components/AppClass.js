import React from 'react'

export default class AppClass extends React.Component {
  state = {
    x:2,
    y:2,
    steps:0,
    email: "june@Hot.com"
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

          <div className = {this.state.x === 1 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className = {this.state.x === 1 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 3 ? "B" : ''}
          </div>

          <div className = {this.state.x === 2 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className = {this.state.x === 2 && this.state.y === 2 ? "square active" : "square"}>
          {this.state.x === 2 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className = {this.state.x === 2 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 3 ? "B" : ''}
          </div>

          <div className = {this.state.x === 3 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className = {this.state.x === 3 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 2 ? "B" : ''}
          </div>
          
          <div className = {this.state.x === 3 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 3 ? "B" : ''}
          </div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
