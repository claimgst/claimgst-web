import React from 'react';

const PostItem = (props) => (
  <a href="#" className="list-group-item">
    <h4 className="list-group-item-heading">
      {props.post.name}
      <p className="pull-right">${(300-props.post.amount)*(-1)}</p>
    </h4>
    <p className="list-group-item-text">ABN: {props.post.abn}</p>
    <p className="list-group-item-text">Date: {props.post.date}</p>
    <p className="list-group-item-text">Amount: ${props.post.amount}</p>
  </a>
);

export default PostItem;