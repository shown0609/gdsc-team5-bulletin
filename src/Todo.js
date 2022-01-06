import React, { Component } from 'react';
import Reply from './Reply'
import './css/todo.css';

export default class from extends Component {

  render() {
    const link = this.props.done? 'キャンセル' : 'メッセージを削除する';
    const className = this.props.done? 'done' : 'undone';
    const todoDelete = this.props.done? '本当に削除する' : '';
    return(
      <li className={className}>
        <span>{this.props.countTodo}</span>
        <span>：{this.props.title}　　</span>
        <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>　　
        <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props)}}>{todoDelete}</a><br/>
        <Reply />
      </li>
    );
  }

}
