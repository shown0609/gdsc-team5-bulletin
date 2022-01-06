import React, { Component } from 'react';
import './css/form.css';

export default class Form extends Component {

  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <textarea name="title"  placeholder="メッセージ ※必須" /><br/>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }
}
