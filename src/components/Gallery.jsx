import React , {Component} from 'react';
import Data from "./Data";
import Movie from "./Movie"

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies:[] ,
        page : 1      
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {  
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=${this.props.match.params.id}&page=${this.state.page}`)
      .then(response  =>  response.json())
      .then(data  => {   
        let newList = [...this.state.movies, ...data.results];
        this.setState({            
          movies : newList
        });
    });    
  }

  upPageNumber =() => {
    this.setState({
      page : this.state.page +1, 
    }, ()=>{
      this.getData();
    });
  }
    /*const galleryName = this.props.match.params.galleryName;
    const galleryId = this.props.match.params.id
    console.log(galleryId);
    

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
    });  */  
  
  render() {
    return (
    <div className = "row">
    <h2 className="title-cat">{this.props.match.params.galleryName}</h2>
    <button onClick={()=> {this.upPageNumber()}}>up page</button>
    <div className = "gallery-type">   
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