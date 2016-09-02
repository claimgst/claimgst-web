import React, { Component, PropTypes } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name: '',
     abn: '',
     amount: ''
    }
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleAbnChange(e) {
    this.setState({abn: e.target.value});
  }
  handleAmountChange(e) {
    this.setState({amount: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var abn = this.state.abn.trim();
    var amount = this.state.amount.trim();
    if (!amount || !abn || !name) {
      return;
    }
    this.props.onPostSubmit({name: name, abn: abn, amount: amount});
    this.setState({name: '', abn: '', amount: ''});
  }
  render() {
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
};

PostForm.propTypes = {
  onPostSubmit: PropTypes.func.isRequired
}

export default PostForm;