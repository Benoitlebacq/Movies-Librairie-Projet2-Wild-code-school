import React from "react";
import MoviePlayedIn from "./MoviesPlayedIn";
class RoleList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

                    <div >
                        <MoviePlayedIn
                            cle={this.props.idMovie}
                            key={this.props.idMovie}
                        />
                    </div>

        )
    }
}
export default RoleList;