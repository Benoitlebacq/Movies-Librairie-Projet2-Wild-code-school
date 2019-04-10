import React from "react";
import Categorie from "./Categorie";
import Data from "./Data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data
    };
  }  
  render() {
    return (
      <div>
        {this.state.Data.map((item)=> {
          return(
          <Categorie
            
            key = {item.type}
            type = {item.type}
            url = {item.url}
          >
          </Categorie>
          )
        })}         
      </div>  
    );
  }
}
export default HomePage;
