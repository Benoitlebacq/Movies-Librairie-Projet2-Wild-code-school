import React from "react";
import Movie from "./Movie";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import data from "./Data";



class Galerie extends React.Component {
  render() {
    return (

      <CardDeck>
        <div className ="row">       
          {data.map((film, idx) => {
          return (
            <Movie
              key={idx}
              cle={idx}
              image = {film.image}
            />
          );
        })}
        </div>        
      </CardDeck>
  
    );
  }
}
export default Galerie;
