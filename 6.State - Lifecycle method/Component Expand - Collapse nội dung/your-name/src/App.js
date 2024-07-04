import './App.css';
import React, { Component } from 'react'

class Expand extends Component {
  render() {
    return (
      <>
        <div>
          <button onClick={this.props.onExpand}>Xem</button>
        </div>
      </>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: true
    };
  }
  handleExpand = () => {
    this.setState({ isExpand: true })
  }
  handleCollapse = () => {
    this.setState({ isExpand: false })
  }

  render() {
    const { isExpand } = this.state
    if (isExpand) {
      return (<Expand onExpand={this.handleCollapse} />)
    }
    return (
      <>
        <div>
          <button onClick={this.handleExpand}>Ẩn</button>
          <h2>Giới thiệu</h2>
          <p>Conditional Rendering (render có điều kiện) là một tính năng quan trọng trong
            ReactJS cho phép bạn hiển thị hoặc ẩn các thành phần dựa trên một điều kiện nhất
            định. Điều này giúp bạn tạo ra các giao diện động và linh hoạt hơn, có thể phản ứng
            với sự thay đổi trong dữ liệu hoặc hành vi của người dùng.</p>
        </div>
      </>
    )
  }
}
