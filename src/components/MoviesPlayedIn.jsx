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
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.cle}?api_key=a8a3380a564299f359c18e52aaa5bc79`)
        .then(response  =>  {           
           this.setState({            
            movies : response.data.results
          });
      });    
    }
  render() {
    return (
      <div className= "movie-card">                
          <div className="card border-0 m-1">
            
            <Link  to={`/fiche/${this.props.cle}`}><img src ={this.props.image} alt="" className="img-card"/></Link>
          </div>
      </div>
    );
  }
}
export default MoviePlayedIn;
