import React, { Component } from 'react';
import axios from "axios";
import Movie from "./Movie"


class GalleryFavoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      newList: [],
      page: 1,
      lastCall: 0
    };
  }
  componentDidMount() {
    //this.getData();
    axios.get('http://localhost:5050/favorites/')
      .then((response) => {
        console.log((typeof JSON.stringify(response.data))
        /*this.setState({
          newList: this.state.newList.push(JSON.stringify(response.data))
        }); */  
       
      )})
      //console.log(this.state.newList)
        }

  

  

  /*getData() {
    axios.get('http://localhost:5050/favorites/')
      .then(response => {
        console.log(response.data)
        this.setState({
          newList: response.data
        });
        console.log(this.state.newList)
       
      });
  };*/

  
  render() {    
    
    let favoriteDetails = [];
      return (
      <div>
        {this.state.newList.map((result, i) => {
          return ( 
            result.movie_id
           //
          );
        })       
        .map((fav, i) =>{
          console.log(fav) 
          return(              
            axios.get(`https://api.themoviedb.org/3/movie/${fav}?api_key=a8a3380a564299f359c18e52aaa5bc79`)
            .then(response => {
              
              favoriteDetails[i].poster_path = response.data.poster_path
              favoriteDetails[i].id = response.data.id
              favoriteDetails[i].genre_ids = response.data.genre_ids
              console.log(favoriteDetails[i])
              })            
          )
                  
        }
        )}

        <div className="container-fluid">
          <div className="row" >
            <h2 className="title-cat">blablabla</h2>
            <div className="gallery-type">
              {favoriteDetails.map((film, idx) => {
                return (
                  <div className="m-1">
                    <Movie
                      key={idx}
                      cle={film.id}
                      image={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                      genres={film.genre_ids}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
};
export default GalleryFavoris;