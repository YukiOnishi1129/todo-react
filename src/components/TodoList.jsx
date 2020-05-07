import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    // thisをbind
    this.handleRemove = this.handleRemove.bind(this);
  }

  // 親コンポーネントから渡されたメソッドを自分のメソッド内で実行する
  // (この自分のコンポーネントを子供のTodoコンポーネントへ渡す)
  handleRemove(id) {
    this.props.handleDelete(id);
  }

  render() {
    // forループで記載する場合(処理が冗長になる)
    // const todolist = [];
    // for (let i = 0; i < this.props.todos.length; i++) {
    //   todolist.push(
    //     <Todo
    //       key={this.props.todos[i].id}
    //       id={this.props.todos[i].id}
    //       title={this.props.todos[i].title}
    //       onRemove={this.handleRemove}
    //     />
    //   );
    // }

    // map関数で実施した場合(こっちがシンプルに書ける)
    const todolist = this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} onRemove={this.handleRemove} />;
    });

    return (
      <section className="common-area">
        <ul className="todolist">{todolist}</ul>
      </section>
    );
  }
}
