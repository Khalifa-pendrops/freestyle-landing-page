import React, { Component } from 'react'

export class Practices extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello Anyone!'
        }
    }
    changeMessage() {
        this.setState({
            message: "welcome khalifa and thank you for registering"
    })
    }
    

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeMessage()}>Login</button>
      </div>
    );
  }
}

export default Practices
