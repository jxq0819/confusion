import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
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
    return (<div/>);
  }
}

function RenderComments({selectedComments}) {
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

function DishDetail(props) {
  const selectedDish = props.selectedDish;
  let selectedDishDetail;
  if (selectedDish != null) {
    const dish = <RenderDish dish={selectedDish}/>;
    const comments = <RenderComments selectedComments={selectedDish.comments}/>;
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

export default DishDetail;
