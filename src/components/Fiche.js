import React from "react";

class Fiche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fiche:[]

    };
   this.getFiche();
  }

  getFiche() {    
    fetch("https://api.themoviedb.org/3/movie/" + this.props.match.params.ficheNumber + "?api_key=a8a3380a564299f359c18e52aaa5bc79" )
      .then(response  =>  response.json())
      .then(data  => { 
        console.log("voici les data :" + data)    
        console.log("https://api.themoviedb.org/3/movie/" + this.props.match.params.ficheNumber + "?api_key=a8a3380a564299f359c18e52aaa5bc79")

        this.setState({
          
          fiche : data
        });
    });    
  }

    render() {
      
      return (  
        <div>          
         
         
         {console.log(this.state.fiche.genres)}
         
         <h2 className="movieTitle">{this.state.fiche.original_title}</h2>
         <img src= {"https://image.tmdb.org/t/p/w500" + this.state.fiche.backdrop_path}/>
         
          
         <div className="container" >{this.state.fiche.overview}</div>
         
         <h5>{this.state.fiche.release_date}</h5>
        
        </div>        
      );
    }
  }

  //on veut recuperer dans la fiche :  "https://api.themoviedb.org/3/movie/ + id de la fiche qui a été cliquée + ?api_key=a8a3380a564299f359c18e52aaa5bc79"
  // et pourles credits "https://api.themoviedb.org/3/movie/ + id de la fiche qui a été cliquée + / credits + ?api_key=a8a3380a564299f359c18e52aaa5bc79"
  // if video === false  on fait une recherche du trailer  sur YT

  export default Fiche;