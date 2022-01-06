import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './css/App.css'


class PostedPartBody extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      countTodo: 1,
      countDone: 0,
      num: 1,
    }
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos })
        this.setState({ countTodo: this.state.countTodo + this.state.todos.length})}
      )
      .catch(() => this.setState({ hasErrored: true }));
  }

  componentDidMount() {
    this.fetchData('data1.json');
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) {
      alert("何も入力されていません");
      return;
    }
    const todos = this.state.todos.slice();

    if (todos.filter(todo => todo.title === title).length > 0) {
      alert("同じタイトルのtodoがあります");
      return;
    }

    todos.push({
      title: title,
      done: false,
      countTodo: this.state.countTodo
    });
    const countTodo = this.state.countTodo + 1 ;
    this.setState({ todos });
    this.setState({countTodo})

    e.target.title.value = '';
  }

  setTodoStatus(clickTodo) {
    let countDone = this.state.countDone;
    let level = this.state.level;
    let num = this.state.num;
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.index];
    todo.done = !todo.done;
    todos[clickTodo] = todo;

    if (todo.done) {
      countDone++;
    } else {
      countDone--;
    }

   while (countDone >= num) {
      level++;
      if (num === 0) {
        num += 2;
      } else {
      num += level;
      }
      console.log(countDone, num);
    }
    const nextLevel = num - countDone;

    this.setState({ todos });
    this.setState({ countDone });
    this.setState({ level });
    this.setState({ num });
    this.setState({ nextLevel });
  }

  deleteTodoState(clickTodo) {
    const todos = this.state.todos.slice();
    todos.splice(clickTodo.index, 1);
    this.setState({ todos });
  }

  render() {
    let undoneNum = 0;

    this.state.todos.forEach((todo) => {
      if (todo.done === false) {
        undoneNum++;
      }
    });

    return (
      <div className="app">
        <h1>スレッドを投稿する</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          deleteTodoState={this.deleteTodoState.bind(this)}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
          />
      </div>
    );
  }
}

export default PostedPartBody;
