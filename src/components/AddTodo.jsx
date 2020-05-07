import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <section className="common-area">
        <h2 className="add-title">ADD TASK</h2>
        <input type="text" placeholder="New Task" />　
      </section>
    );
  }
}
