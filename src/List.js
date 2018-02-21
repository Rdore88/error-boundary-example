import React, { Component } from 'react';
import ListErrorBoundary from './ListErrorBoundary';
import listData from './ListData';
import ListItem from './ListItem';

export default class List extends Component {
  render(){
    return (
      <div className="wrapper">
        <h3 className="list-header">My Favorite Games</h3>
        <ul className="list">
          {listData.map(item => (
            <ListErrorBoundary>
              <ListItem data={item} />
            </ListErrorBoundary>
          ))}
        </ul>
      </div>
    )
  }
}
