import React from "react";
import Movie from "./Movie";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import data from "./Data";
import Categorie from "./Categorie"



class Galerie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories :
          [
          {type: "popular",          
            url : "https://api.themoviedb.org/3/movie/popular?api_key=a8a3380a564299f359c18e52aaa5bc79"      
            
          },

          {type: "top rated",          
            url : "https://api.themoviedb.org/3/movie/top_rated?api_key=a8a3380a564299f359c18e52aaa5bc79"       
            
          },
          
          {type: "upcoming",          
            url : "https://api.themoviedb.org/3/movie/upcoming?api_key=a8a3380a564299f359c18e52aaa5bc79"       
            
          },
          
          {type: "now playing",          
            url : "https://api.themoviedb.org/3/movie/now_playing?api_key=a8a3380a564299f359c18e52aaa5bc79"       
            
          }       
          
          ]
    };
    
  }
  
  render() {
    return (

      <div>

        {this.state.categories.map((item)=> {
          return(
          <Categorie
            
            key = {item.type}
            type = {item.type}
            url = {item.url}
          >
          </Categorie>
          )

        })} 
        
      </div>
  
    );
  }
}

//"https://api.themoviedb.org/3/movie/287947?api_key=a8a3380a564299f359c18e52aaa5bc79


export default Galerie;
