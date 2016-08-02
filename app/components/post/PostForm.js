var React = require('react');

var PostForm = React.createClass({
  getInitialState: function() {
    return {name: '', abn: '', amount: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleAbnChange: function(e) {
    this.setState({abn: e.target.value});
  },
  handleAmountChange: function(e) {
    this.setState({amount: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var abn = this.state.abn.trim();
    var amount = this.state.amount.trim();
    if (!amount || !abn || !name) {
      return;
    }
    this.props.onPostSubmit({name: name, abn: abn, amount: amount});
    this.setState({name: '', abn: '', amount: ''});
  },
  render: function() {
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          placeholder="ABN"
          value={this.state.abn}
          onChange={this.handleAbnChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = PostForm;