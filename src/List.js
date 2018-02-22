import React, { Component } from 'react';
import listData from './ListData';
import ListItem from './ListItem';
import ErrorBoundary from './ErrorBoundary';

export default class List extends Component {
  render(){
    return (
      <div className="wrapper">
        <ul className="list">
          {listData.map(item => (
            <ErrorBoundary>
              <ListItem data={item} />
            </ErrorBoundary>
          ))}
        </ul>
      </div>
    )
  }
}
