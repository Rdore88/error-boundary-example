import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <li className="list-item">
        <span>Game: {this.props.data.name}</span>
        <br />
        <span>number of players: {this.props.data.number_of_players}</span>
      </li>
    )
  }
}
