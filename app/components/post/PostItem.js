var React = require('react');

var PostItem = React.createClass({
  render: function() {
    return (
      <a href="#" className="list-group-item">
        <h4 className="list-group-item-heading">
          {this.props.post.name}
          <p className="pull-right">${(300-this.props.post.amount)*(-1)}</p>
        </h4>
        <p className="list-group-item-text">ABN: {this.props.post.abn}</p>
        <p className="list-group-item-text">Date: {this.props.post.date}</p>
        <p className="list-group-item-text">Amount: ${this.props.post.amount}</p>
      </a>
    );
  }
});

module.exports = PostItem;