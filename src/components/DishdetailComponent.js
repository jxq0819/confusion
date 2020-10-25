import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name}/>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
      );
    } else {
      return (
          <div/>
      );
    }
  }

  renderComments(selectedComments) {
    const comments = selectedComments.map(selectedComment => {
      return (
          <li key={selectedComment.id}>
            <p>{selectedComment.comment}</p>
            <p>-- {selectedComment.author},
              &nbsp;
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }).format(new Date(selectedComment.date))}
            </p>
          </li>
      );
    });
    return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments}
          </ul>
        </div>
    );
  }

  render() {
    const selectedDish = this.props.selectedDish;
    let selectedDishDetail;
    if (selectedDish != null) {
      const dish = this.renderDish(selectedDish);
      const comments = this.renderComments(selectedDish.comments);
      selectedDishDetail = <div className="row">
        {dish}
        {comments}
      </div>;
    } else {
      selectedDishDetail = <div/>;
    }
    return (
        <div className="container">
          {selectedDishDetail}
        </div>
    );
  }
}

export default DishDetail;
