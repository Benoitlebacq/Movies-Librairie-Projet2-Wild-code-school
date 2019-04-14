import React from "react";
import axios from 'axios';

class RoleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            moviesInRoles: []
        }
        console.log('les id')
        console.log(this.props.id)
        console.log("tableau title dans rolelist")
        console.log(this.props.roles)
    }
    /*componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/person/${this.props.id}/movie_credits?api_key=a8a3380a564299f359c18e52aaa5bc79`)
        .then(res => {
            this.setState({
                moviesInRoles : res.data.title
            });
            
        });        
    }*/
    render (){
        return (
            
           <div>voivi l'id du film : {this.props.idMovie} ou il joue ce role
            {this.props.roles}           
            </div>            
        )
    }}
export default RoleList;