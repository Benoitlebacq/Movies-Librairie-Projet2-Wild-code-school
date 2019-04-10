import React from "react";

class Fichecontain extends React.Component {
    render() {
      return (
        <div className= "col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mt-1 ">

            <p>{this.props.name}</p>
            <p>(# {this.props.cle})</p>
   
        </div>
      );
    }
  }
  export default Fichecontain;