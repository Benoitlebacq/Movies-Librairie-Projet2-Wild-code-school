import React , {Component} from 'react';
import Data from "./Data";
import Movie from "./Movie"
const axios = require('axios');


class SearchGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies:[]  
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {  
    const query = this.props.match.params.search;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(response  =>  {  
          this.setState({            
            movies : response.data.results    
          });
          console.log(this.state.movies)
      });    
  }
  render() {
  return (
    
  
    <div>   
        {
          this.state.movies.map((film, idx) => {
            return (
              <div className="flexisation border-0 m-1">
              <Movie
                key={idx}
                cle={film.id}
                image = {"https://image.tmdb.org/t/p/w500" + film.poster_path}
                genres={film.genre_ids}              
              />
              </div>
            );        
          })
    
    }      
    </div>   
    
    )
}
};
export default SearchGallery;