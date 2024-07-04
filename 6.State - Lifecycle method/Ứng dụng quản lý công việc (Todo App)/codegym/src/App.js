import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      item: ''
    }
  }
  handleChange = (event) => {
    this.setState({item: event.target.value})
  }
  handleAddItem = () => {
    if (this.state.item == "") {
      alert("Please add!!!")
    } else {
      this.setState({list: [...this.state.list,this.state.item]})
      this.setState({item: ''})
    }
  }
  render() {
    return (
      <div style={{
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1>Todo List</h1>
        <input value={this.state.item} onChange={(event) => this.handleChange(event)}/>
        <button onClick={() => this.handleAddItem()}>Add</button>
        {this.state.list.map((e,i) => (
            <p>{i+1}. {e}</p>
        ))}
      </div>
    )
  }
}

