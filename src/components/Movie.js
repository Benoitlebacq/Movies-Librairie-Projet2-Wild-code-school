import React from "react";
import { Card, CardImg} from 'reactstrap';
import { Link } from "react-router-dom";  
class Movie extends React.Component {
  render() {
    return (
      <div className= "col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mt-1 ">
      <span>{this.props.title}</span>
        <Card >
          <Link  to={`/fiche/${this.props.cle}`}><CardImg src ={this.props.image}/></Link>
        </Card>
      </div>
    );
  }
}
export default Movie;
