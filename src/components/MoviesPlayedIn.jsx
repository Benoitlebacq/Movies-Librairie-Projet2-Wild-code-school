import React from "react";
import { Link } from "react-router-dom";  
import axios from "axios";
class MoviePlayedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[]      
        };
      }
    componentDidMount() {
      this.getMovie();
    }
    getMovie() {    
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.cle}?api_key=ff37a1a34cd2beecb41b30cbfda1916b`)
        .then(response  =>  {           
           this.setState({            
            movies : response.data            
          });
      });    
    }
  render() {
    const isLoaded = () => this.state.movies.poster_path;
    return (
      <div className= "movie-card">                
          <div className=" border-0 m-1">
            {
              isLoaded()
              ?<Link  to={`/fiche/${this.props.cle}`}><img src ={`https://image.tmdb.org/t/p/w500${this.state.movies.poster_path}`} alt="" className="img-card-actor-movies"/></Link>
              :<p>Loading...</p>
            }             
          </div>
      </div>
    );
  }
}
export default MoviePlayedIn;
