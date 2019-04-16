import React from "react";
import axios from 'axios';
import Youtube from "react-youtube";
import CastingActors from "./CastingActors";
import CastTech from "./CastTech";
import CastMusic from "./CastMusic";
import CastDirector from "./CastDirector";

class Fiche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fiche:[],
        genres: [], 
        videoId: ""
    };
  }
  componentDidMount() {
    this.getFiche()
  }
  getFiche() { 
    axios.get(`https://api.themoviedb.org/3/movie/ ${this.props.match.params.ficheNumber} ?api_key=a8a3380a564299f359c18e52aaa5bc79` )
      .then(response  => {         
        this.setState({        
          fiche : response.data,
          genres: response.data.genres
        });         
        const query = `${response.data.original_title} trailer`;    
        axios
          .create({
            baseURL: "https://content.googleapis.com/youtube/v3",
            timeout: 1000
          })
          .get(
            `/search?q=${query}&part=snippet&maxResults=1&type=video&key=AIzaSyBNHhT2wVa0lrIZsmMlTlTgIhY1VjrpZ7c`
          )
          .then(response => {
            const vidId = response.data.items[0].id.videoId;
            this.setState({ videoId: vidId });
          })
          .catch(function(error) {
            console.log("Echec appel API Youtube: " + error);
    });
    });    
  }
    render() {      
      return (  
        <div>           
          <div className="movie-description">
                <h1 className="movie-title">{this.state.fiche.original_title}</h1> 
                <div className="movie-pic">
                    <img className="movie-poster" src={"https://image.tmdb.org/t/p/w500" + this.state.fiche.poster_path} alt={this.state.fiche.original_title} />

                    <div className="youtube"><Youtube className="heigh-youtube" videoId={this.state.videoId} /></div>
                    <p className="movie-date">Release date : {this.state.fiche.release_date}</p>
                </div>
              <div className="movie-infos"> 
              <div className="movie-synopsis"> 
                <h2 className="movie-synopsis-title">Synopsis</h2>
                <br/>
                <p>{this.state.fiche.overview}</p>
                </div>
                <div className="movie-genre">
                    <ul>
                        {this.state.genres === undefined ? ' ' : this.state.genres.map((genre) => {                          
                            return <li>{genre.name}</li>
                            }
                        )
                        }
                    </ul>
                </div>
                <div className="movie-casting">
                <h4>Casting :</h4>
                    <ul className="ul-actors-pics">
                        <CastingActors idFilm={this.props.match.params.ficheNumber} />
                    </ul>
                </div>
                <div className="movie-director">
                <h4>Director :</h4>
                    <ul>
                        <CastDirector idFilm={this.props.match.params.ficheNumber} />
                    </ul>
                </div>
                <div className="movie-casttech">
                <h4>Production :</h4>
                    <ul>
                        <CastTech idFilm={this.props.match.params.ficheNumber} />
                    </ul>
                  </div>
                <div className="movie-music">
                <h4>Music :</h4>
                  <ul>
                      <CastMusic idFilm={this.props.match.params.ficheNumber} />
                  </ul>
                </div>
                <img src= {"https://image.tmdb.org/t/p/w500" + this.state.fiche.backdrop_path} alt=""/>
            </div>
            </div>
        </div>        
      );
    }
  }
  
  export default Fiche;