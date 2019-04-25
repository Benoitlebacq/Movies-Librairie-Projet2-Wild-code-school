import React , {Component} from 'react';
import Movie from "./Movie";
import axios from 'axios'

class GalleryFavoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[],
            page : 1,
            lastCall: 0
        };
      }
      componentDidMount() {
        this.getData();
        window.addEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = () => {
       this.upPageNumber();
      }
    
      getData() {  
            axios.get('http://localhost:5050/favorites/') 
            .then(res => {
              console.log(res.movie_id);
              res.map((re,i) => {
                this.setState({
                  movies : re.movie_id
                })
              }
              )
            })  
      }    
    
      upPageNumber =() => {
        if(Date.now() - this.state.lastCall >1000) {
          this.setState({
            page : this.state.page +1, 
            lastCall: Date.now()
          }, ()=>{
            this.getData();
          });
        } 
      }

      render() {
        return (
          <div className="container-fluid">
            <div className="row" onScroll={()=>{this.upPageNumber()}}>
              <h2 className="title-cat">{this.props.match.params.galleryName}</h2>          
              <div className="gallery-type">
                {this.state.movies.map((film, idx) => {
                  return (
                    <div className= "m-1">
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
        )
      }
    
};
export default GalleryFavoris;