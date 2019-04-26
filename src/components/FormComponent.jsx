import React from 'react'
import StarRating from 'react-star-rating'

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action={`https://api.themoviedb.org/3/movie/${this.props.id}/rating?api_key=1092ee57947c8bdfc25a5a0641ecb8ec`} method="POST">
        <StarRating name="airbnb-rating" caption="Rate your stay!" totalStars={5} />
        <button type="submit" className="btn btn-submit">Submit Rating</button>
      </form>
    );
  }
}

//React.render(<FormComponent />, document.getElementById('star-rating'));
export default FormComponent;