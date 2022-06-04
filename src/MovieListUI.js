// MovieList.js
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import MovieItemUI from './MovieItemUI';
import MovieList from './MovieList';


// MovieList component
export default class MovieListUI extends React.Component {

  state={
    loading: true,
    firstMovie: null,
    height: 0
  }

  async componentDidMount() {
    const url='movie_ids_03_26_2022.json';
    const response=await fetch(url);
    const json=await response.json();
    const thisNodeHeight=this.element.clientHeight;
    this.setState({movieManager:new MovieList(json), loading:false, height:thisNodeHeight});
  }

  render(){

    return (
      <div className="App" ref={ (element) => { this.element = element } }>
        {
          this.state.movieManager?
            this.state.movieManager.getMovies().map((item, i) => <MovieItemUI key={item.id} title={item.original_title} />
            )
          :
            <h1>Loading...</h1>
        }
      </div>
    )
  }

}
