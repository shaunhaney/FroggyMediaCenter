import React, { useState, useEffect } from 'react';

export default class MovieItemUI extends React.Component {
  constructor(props){
    super(props);
    // this.state.selected=false;

  }

  render() {
    return (
      <div className="movieItem">{this.props.title}</div>
    );
  }
}
