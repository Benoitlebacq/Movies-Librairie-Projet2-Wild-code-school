import React from 'react';
import Data from "./Data";


class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Data:[]      
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {    
    fetch(this.props.url)
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
            image = {"https://image.tmdb.org/t/p/w500" + film.poster_path  }              
          />
        );        
      })}      
    </div>   
    </div>
    )
  }
};
export default Data;