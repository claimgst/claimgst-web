import React, { Component, PropTypes } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abn: '',
      date: ''
    }
  }
  handleInputChange(event) {
    var nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }
  handleSubmit(event) {
    event.preventDefault();
    var abn = this.state.abn.trim();
    var date = this.state.date.trim();
    if (!date || !abn) {
      return;
    }
    this.props.onSubmitSearch({abn: abn, date: date});
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <form className="form-inline">
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  value={this.state.abn}
                  name="abn"
                  onChange={(event) => this.handleInputChange(event)}
                  className="form-control"
                  placeholder="Input ABN" />
              </div>
              <div className="input-group">
                <input
                  type="date"
                  value={this.state.date}
                  name="date"
                  onChange={(event) => this.handleInputChange(event)}
                  className="form-control"
                  placeholder="date" />
              </div>
            </div>
            <button
              className="btn btn-default"
              onClick={(event) => this.handleSubmit(event)}>
              Search
            </button>
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