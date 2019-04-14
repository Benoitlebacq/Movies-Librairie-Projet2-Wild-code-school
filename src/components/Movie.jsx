import React from "react";
import { Link } from "react-router-dom";  

class Movie extends React.Component {
  render() {
    return (
      <div className= "movie-card">
        <span>{this.props.title}</span>
          
          <div className="card border-0 m-1">
        
            <Link  to={`/fiche/${this.props.cle}`}><img src ={this.props.image} alt="" className="img-card"/></Link>
          </div>
      </div>
    );
  }
}
export default Movie;

