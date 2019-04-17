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
    console.log(`${this.props.search}`)  
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&language=en-US&page=1&include_adult=false&query=${this.props.search}`)
        .then(response  =>  {           
           this.setState({            
            movies : response.data            
          });
          console.log(this.state.movies)
      });    
  }
  render() {
    return (<p>jhjhjh</p>)
  }
};
export default SearchGallery;