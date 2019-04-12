import React from "react";
import axios from 'axios';
import Youtube from "react-youtube"

class Fiche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fiche:[], 
        videoId: ""
    };
  }
  componentDidMount() {
    this.getFiche()
  }
  getFiche() { 
    axios.get("https://api.themoviedb.org/3/movie/" + this.props.match.params.ficheNumber + "?api_key=a8a3380a564299f359c18e52aaa5bc79" )
      .then(response  => {   
         
        this.setState({        
          fiche : response.data
        }); 

        const apiKey = "AIzaSyBNHhT2wVa0lrIZsmMlTlTgIhY1VjrpZ7c"; 
        const query = `${response.data.original_title} trailer`;
    
        axios
          .create({
            baseURL: "https://content.googleapis.com/youtube/v3",
            timeout: 1000
          })
          .get(
            `/search?q=${query}&part=snippet&maxResults=1&type=video&key=${apiKey}`
          )
          .then(response => {
            const vidId = response.data.items[0].id.videoId;
            this.setState({ videoId: vidId });
          })
          .catch(function(error) {
            console.log("Echec appel API Youtube: " + error);
    });

    });    
  }
    render() {      
      return (  
        <div>          
         <h2 className="movieTitle">{this.state.fiche.original_title}</h2>
         <img src= {"https://image.tmdb.org/t/p/w500" + this.state.fiche.backdrop_path} alt=""/>               
         <div className="container" >{this.state.fiche.overview}</div>         
         <h5>{this.state.fiche.release_date}</h5>    
        <Youtube videoId={this.state.videoId} />    
        </div>        
      );
    }
  }
  
  export default Fiche;