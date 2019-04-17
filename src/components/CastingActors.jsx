import React from 'react';
import axios from 'axios'
import CastingLink from "./CastingLink"
class CastingActors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cast: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.idFilm}/credits?api_key=1092ee57947c8bdfc25a5a0641ecb8ec`)
        .then(res => {
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
              return <div>
              <CastingLink 
              name = {casting.name}
              img ={"https://image.tmdb.org/t/p/w500" + casting.profile_path}
              id = {casting.id}
              />          
              </div>
            }
            )
        )}
    }
export default CastingActors;
