import React from 'react';
import axios from 'axios'

class Casting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cast: []
        }
    }
    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/movie/" + this.props.idFilm + "/credits?api_key=a8a3380a564299f359c18e52aaa5bc79").then(res => {
         // console.log(res.data.cast);
          this.setState({
            cast: res.data.cast
          });
        });
    }
    render(){
        return(    
         this.state.cast.filter((member,i)=>{
             return i<5;
         }).map((casting) => {
              return <img className="movie-profil" src={"https://image.tmdb.org/t/p/w500" + casting.profile_path} alt={casting.name}  title={casting.name} />
              
            }
            )
        )}
    }



export default Casting;
