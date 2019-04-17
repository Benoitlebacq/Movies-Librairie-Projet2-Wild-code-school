import React , {Component} from 'react';
import Data from "./Data";
import Movie from "./Movie"

class Gallery extends Component {
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
    const galleryName = this.props.match.params.galleryName;
 
    
    const filteredGalleries = Data.filter((gallery)=>{
        if(gallery.type === galleryName) {
            return true;
        }
        return false;
    });
    const url = filteredGalleries[0].url;

    fetch(url)
    .then(response  =>  response.json())
    .then(data  => {           
        this.setState({            
        movies : data.results
        });
    });    
  }
  render() {
    return (
    <div className = "mt-5">
    <h2 className="categoriesName ml-3">{this.props.type}</h2>
    <div className = "containing">   
        {this.state.movies.map((film, idx) => {
        return (
          <Movie
            key={idx}
            cle={film.id}
            image = {"https://image.tmdb.org/t/p/w500" + film.poster_path}
            genres={film.genre_ids}              
          />
        );        
      })}      
    </div>   
    </div>
    )
  }
};
export default Gallery;