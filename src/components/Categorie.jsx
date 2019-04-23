import React, { Component } from 'react';
import Movie2 from "./Movie2";
import { NavLink } from 'react-router-dom';
class Categorie extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies:[],
        page : 1     
    };
  }
  componentDidMount() {
    this.getMovie();
  }  
  getMovie() {  
    const baseUrl = this.props.url  ;
    fetch(baseUrl + this.state.page)
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
      this.getMovie();
    });
  }

  render() {
    return (
    <div className = "mt-5">
    <NavLink activeClassName="active" exact to={`/gallery/${this.props.type}/${this.props.id}`}>
    <h2 className="categoriesName ml-3">{this.props.type}</h2>
    </NavLink>
    <button onClick={()=> {this.upPageNumber()}}>up page</button>
    <div className = "containing">   
        {this.state.movies.map((film, idx) => {
        return (
          <Movie2
            key={idx}
            cle={film.id}
            image = {"https://image.tmdb.org/t/p/w500" + film.poster_path}              
          />
        );        
      })}      
    </div>   
    </div>
    )
  }
};
export default Categorie;
/*inintialiser un state page = 1 
appeler le state.page dans la get movie
puis sur un onscroll on va incrementer le state.page de 1 et rappeler get movie*/
// THEORIE DAMIEN : push le contenu de la p2 dans la tableau qui contient les movies de la p1