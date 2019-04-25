import React from "react";
import axios from 'axios';
import Youtube from "react-youtube";
import CastingActors from "./CastingActors";
import CastTech from "./CastTech";
import CastMusic from "./CastMusic";
import CastDirector from "./CastDirector";
import favlogo from './img/fav.png';
import '../Fiche.css';
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
class Fiche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiche: [],
      genres: [],
      videoId: ""
    };
  }
  componentDidMount() {
    this.getFiche()
  }
  getFiche() {
    axios.get(`https://api.themoviedb.org/3/movie/ ${this.props.match.params.ficheNumber} ?api_key=a8a3380a564299f359c18e52aaa5bc79`)
      .then(response => {
        this.setState({
          fiche: response.data,
          genres: response.data.genres
        });
        const query = `${response.data.original_title} trailer`;
        axios
          .create({
            baseURL: "https://content.googleapis.com/youtube/v3",
            timeout: 1000
          })
          .get(
            `/search?q=${query}&part=snippet&maxResults=1&type=video&key=AIzaSyAYQjF7_hRZGUMoUwlcUezlq33cGFz5SO0`
          )
          .then(response => {
            const vidId = response.data.items[0].id.videoId;
            this.setState({ videoId: vidId });
          })
          .catch(function (error) {
            console.log("Echec appel API Youtube: " + error);
          });
      });
  }

  addFav = () => {

  let favorites = {
    user_id:"2",
    movie_id: this.props.match.params.ficheNumber
  };
      axios.post('http://localhost:5050/favorites', {...favorites}) 
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  alert("Added to favorite list");
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="movie-description justify-content-center">
          <h1 className="movie-title">{this.state.fiche.original_title}</h1>
          <div className="movie-pic row">
            <div className="movie-fav col-lg-4 col-md-12">
            <img className="movie-poster" src={"https://image.tmdb.org/t/p/w500" + this.state.fiche.poster_path} alt={this.state.fiche.original_title} />
            <img src={favlogo} className="favicon" onClick={this.addFav} alt="fav" title="Favorite" />
            </div>
            <div className="youtube col-lg-6 col-md-12"><Youtube className="heigh-youtube" videoId={this.state.videoId} />
              <p className="movie-date">Release date : {this.state.fiche.release_date}</p>
            </div>
          </div>
          <div className="movie-infos container ">
            <div className="movie-synopsis mb-5">
              <h2>Synopsis</h2>

              <p>{this.state.fiche.overview}</p>
            </div>
            <div className="movie-genre">
              <ul>
                <h4>Genres </h4>{this.state.genres === undefined ? ' ' : this.state.genres.map((genre) => {
                  return <NavLink activeClassName="active" className="textdeco" style={{ textDecoration: 'none', outline: 'none' }} exact to={`/gallery/${genre.name}/${genre.id}`}>{genre.name} </NavLink>
                }
                )
                }
              </ul>
            </div>
            <div className="movie-casting">
                <div className="ml-5">
              <h4 className="">Casting</h4></div>
              <div className="ul-actors-pics mt-3">
                <CastingActors idFilm={this.props.match.params.ficheNumber} />
              </div>
            </div>
            <div className="movie-director">
              <div className="infos-casting">
                <h4>Director</h4>
                <ul>
                  <CastDirector idFilm={this.props.match.params.ficheNumber} />
                </ul>
              </div>
              <div className="movie-casttech">
                <h4>Production</h4>
                <ul>
                  <CastTech idFilm={this.props.match.params.ficheNumber} />
                </ul>
              </div>
              <div className="movie-music">
                <h4>Music</h4>
                <ul>
                  <CastMusic idFilm={this.props.match.params.ficheNumber} />
                </ul>
              </div>
            </div>
            <div className="img-down">
              <img src={"https://image.tmdb.org/t/p/w500" + this.state.fiche.backdrop_path} alt={this.state.fiche.original_title} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fiche;