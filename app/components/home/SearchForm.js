import React, { Component, PropTypes } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abn: '',
      date: ''
    }
  }
  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleSubmit(e) {
    e.preventDefault();
    var abn = this.state.abn.trim();
    var date = this.state.date.trim();
    if (!date || !abn) {
      return;
    }
    this.props.onSubmitSearch({abn: abn, date: date});
    this.setState({abn: '', date: ''});
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  value={this.state.abn}
                  name="abn"
                  onChange={this.handleChange.bind(this)}
                  className="form-control"
                  placeholder="Input ABN" />
              </div>
              <div className="input-group">
                <input
                  type="date"
                  value={this.state.date}
                  name="date"
                  onChange={this.handleChange.bind(this)}
                  className="form-control"
                  placeholder="date" />
              </div>
            </div>
            <button className="btn btn-default" type="button" type="submit">Search</button>
          </form>
        </div>
      </div>
    )
  }
};

SearchForm.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired
}

export default SearchForm;