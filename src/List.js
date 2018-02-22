import React, { Component } from 'react';
import listData from './ListData';
import ListItem from './ListItem';
import ErrorBoundary from './ErrorBoundary';

export default class List extends Component {
  render(){
    return (
      <div className="wrapper">
        <h3 className="list-header">My Favorite Games</h3>
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
