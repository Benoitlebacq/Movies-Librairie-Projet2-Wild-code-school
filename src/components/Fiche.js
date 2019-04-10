import React from "react";
import Fichecontain from "./Fichecontain";
import data from "./Data"

class Fiche extends React.Component {
    render() {
      return (  
        <div>          
          {data.map((film, idx) => {
              if ( idx === 1){
                return (
                <Fichecontain
                    name={film.filmName}
                    key={idx}
                    cle={idx}
                    image = {film.image}
                 /> 
                        );
                };
            })}
        </div>        
      );
    }
  }
  export default Fiche;