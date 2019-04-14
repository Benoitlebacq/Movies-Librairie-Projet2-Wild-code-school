import React from "react";
import axios from 'axios';
import RoleList from "./RoleList"

class Casting extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movielist: []
        }
        console.log("premiere console")
        console.log(this.props.match.params.castingNumber)
    }    
    componentDidMount() {
        this.getMovielist()
    }
    getMovielist (){
        console.log(this.props.match.params.castingNumber)
        axios.get(`https://api.themoviedb.org/3/person/${this.props.match.params.castingNumber}/movie_credits?api_key=a8a3380a564299f359c18e52aaa5bc79`)
            .then(resp => {
                this.setState({
                    movieList: resp.data
                      
                });
                console.log("le tableau de roles")
                console.log(resp.data.cast)
            })
    }    
    render() {        
        return (

            <div>
                <RoleList 
                roles = {movieList.cast}

                />
            </div>
        )
    }
}

export default Casting;