import React, { Component } from 'react';
import Movie from "./Movie";
import {  CardDeck } from 'reactstrap';


class Categorie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          movies:[]
      
      };
     this.getMovie();
    }
    getMovie() {    
      fetch(this.props.url)
        .then(response  =>  response.json())
        .then(data  => { 
          console.log(data.results)    
         
          this.setState({
            
            movies : data.results
          });
      });    
    }
    render() {
      return (
      <div>
      <h2>{this.props.type}</h2>
      <CardDeck>   
          {this.state.movies.map((film, idx) => {
          return (
            <Movie
              key={idx}
              cle={film.id}
              image = {"https://image.tmdb.org/t/p/w500" + film.poster_path}
              
            />
          );
        
        })}      
      </CardDeck>
        

      </div>
      )

    }
}

export default Categorie;

/*<CardDeck>
        <div className ="row">       
          {this.state.movies.map((film, idx) => {
          return (
            <Movie
              key={idx}
              cle={idx}
              image = {"https://image.tmdb.org/t/p/w500" + film.poster_path}
              title={film.title}
            />
          );
        })}
        </div>        
      </CardDeck>*/