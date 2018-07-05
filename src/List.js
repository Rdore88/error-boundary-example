import React, { Component } from 'react';
import listData from './ListData';
import ListItem from './ListItem';

export default class List extends Component {
  render(){
    return (
      <div className="wrapper">
        <ul className="list">
          {listData.map(item => (
              <ListItem data={item} />
          ))}
        </ul>
      </div>
    )
  }
}
