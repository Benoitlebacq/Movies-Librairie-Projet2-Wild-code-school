import React from "react";
import Fichecontain from "./Fichecontain";


class Fiche extends React.Component {
    render() {
      
      return (  
        <div>          
         <p>
         
         {this.props.match.params.ficheNumber}

         </p>
        </div>        
      );
    }
  }

  //on veut recuperer dans la fiche :  "https://api.themoviedb.org/3/movie/ + id de la fiche qui a été cliquée + ?api_key=a8a3380a564299f359c18e52aaa5bc79"
  // et pourles credits "https://api.themoviedb.org/3/movie/ + id de la fiche qui a été cliquée + / credits + ?api_key=a8a3380a564299f359c18e52aaa5bc79"
  // if video === false  on fait une recherche du trailer  sur YT

  export default Fiche;