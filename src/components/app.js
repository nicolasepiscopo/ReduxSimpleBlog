import React, { Component } from 'react';

import Button from './button';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Main template</h1>
        <b>Component:</b> {this.props.children}
      </div>
    );
  }
}
