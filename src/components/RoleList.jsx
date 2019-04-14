import React from "react";

class RoleList extends React.Component{
    constructor(props){
        super(props);
        }
    render (){
        return (
           <div>
            Id du film : {this.props.idMovie} : {this.props.moviePlayed}
            </div>               
        )
    }}
export default RoleList;