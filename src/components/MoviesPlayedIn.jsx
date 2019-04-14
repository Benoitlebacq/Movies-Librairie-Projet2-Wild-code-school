import React from "react";
import { Link } from "react-router-dom";  

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
      fetch(`https://api.themoviedb.org/3/person/${this.props.idMovie}/movie_credits?api_key=a8a3380a564299f359c18e52aaa5bc79`)
        .then(response  =>  response.json())
        .then(data  => {           
           this.setState({            
            movies : data.results
          });
      });    
    }
  render() {
    return (
      <div className= "movie-card">                
          <div className="card border-0 m-1">
            
            <Link  to={`/fiche/${this.props.idMovie}`}><img src ={this.props.image} alt="" className="img-card"/></Link>
          </div>
      </div>
    );
  }
}
export default MoviePlayedIn;

