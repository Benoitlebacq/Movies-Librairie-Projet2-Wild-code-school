import React, { Component } from 'react';
import Movie2 from "./Movie2";
import { NavLink } from 'react-router-dom';
class Categorie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1
    };
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
      <div className="mt-5">
      
          <h2 className="categoriesName ml-3"><NavLink className="Categoname" style={{ textDecoration: 'none', outline: 'none' }} exact to={`/gallery/${this.props.type}/${this.props.id}`}>{this.props.type}</NavLink></h2>

        <button onClick={() => { this.upPageNumber() }}>up page</button>
        <div className="containing">
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
      </div>
    )
  }
};
export default Categorie;
