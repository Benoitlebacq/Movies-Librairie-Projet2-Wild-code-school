import React, { Component } from 'react';
import Movie2 from "./Movie2";
import { NavLink } from 'react-router-dom';
import $ from "jquery";

class Categorie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      
    };
    this.scroll = this.scroll.bind(this)
  }
  scroll(direction){
    let far = $( '.containing' ).width()/2*direction;
    let pos = $('.containing').scrollLeft() + far;
    $('.containing').animate( { scrollLeft: pos }, 1000)
  }
  componentDidMount() {
    this.getMovie();
  }
  getMovie() {
    const baseUrl = this.props.url;
    fetch(baseUrl + this.state.page)
      .then(response => response.json())
      .then(data => {
        let newList = [...this.state.movies, ...data.results];
        this.setState({
          movies: newList
        });
      });
  }
  upPageNumber = () => {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      this.getMovie();
    });
  }

  render() {
    return (
      <div className="container-fluid ">


        <h2 className="categoriesName ml-3"><NavLink className="Categoname" style={{ textDecoration: 'none', outline: 'none' }} exact to={`/gallery/${this.props.type}/${this.props.id}`}>{this.props.type}</NavLink></h2>

        <button onClick={() => { this.upPageNumber() }}>up page</button>
        <div className="mt-5 row justify-content-center">
          <a className="prev col" onClick={this.scroll.bind(null, -1)}>&#10094;</a>
          <div className="containing col-10">
            {this.state.movies.map((film, idx) => {
              return (
                <Movie2
                  key={idx}
                  cle={film.id}
                  image={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                />
              );
            })}
          </div>
          <a className="next col" onClick={this.scroll.bind(null, 1)}>&#10095;</a>
        </div>
      </div>
    )
  }
};
export default Categorie;
