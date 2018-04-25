import React, { Component } from 'react';
import ErrorMessageImage from './images/error_message.gif';

export default class ErrorBoundary extends Component {
    state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    // console.log(error, info);
  }

  render(){
    if (this.state.hasError) {
      return <li className="list-error-item"><img className="error-image" src={ErrorMessageImage} alt="Error" /></li>
    }
    return this.props.children
  }

}
