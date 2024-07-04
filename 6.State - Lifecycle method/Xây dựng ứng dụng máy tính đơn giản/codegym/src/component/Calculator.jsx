import React, { Component } from 'react'

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: '0',
      num2: '0',
      result: ''
    }
  }
  getInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  getResult = (e) => {
    switch (e.target.value) {
      case "+":
        this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
        break;
      case "-":
        this.setState({ result: this.state.num1 - this.state.num2 })
        break;
      case "x":
        this.setState({ result: this.state.num1 * this.state.num2 })
        break;
      case "/":
        this.setState({ result: this.state.num1 / this.state.num2 })
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <input name="num1" value={this.state.num1} type="number" onChange={(e) => this.getInput(e)} />
        <br />
        <input name="num2" value={this.state.num2} type="number" onChange={(e) => this.getInput(e)} />
        <p>Result: {this.state.result}</p>
        <button value="+" onClick={(e) => this.getResult(e)}>+</button>
        <button value="-" onClick={(e) => this.getResult(e)}>-</button>
        <button value="x" onClick={(e) => this.getResult(e)}>x</button>
        <button value="/" onClick={(e) => this.getResult(e)}>/</button>
      </div>
    )
  }
}
