var React = require('react')
var PropTypes = React.PropTypes;

var SearchForm = React.createClass({
  getInitialState: function() {
    return {abn: '', date: ''};
  },
  handleAbnChange: function(e) {
    this.setState({abn: e.target.value});
  },
  handleDateChange: function(e) {
    this.setState({date: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var abn = this.state.abn.trim();
    var date = this.state.date.trim();
    if (!date || !abn) {
      return;
    }
    this.props.onSubmitSearch({abn: abn, date: date});
    this.setState({abn: '', date: ''});
  },
  render: function () {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  value={this.state.abn}
                  onChange={this.handleAbnChange}
                  className="form-control"
                  placeholder="Input ABN" />
              </div>
              <div className="input-group">
                <input
                  type="date"
                  value={this.state.date}
                  onChange={this.handleDateChange}
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
});

SearchForm.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired
}

module.exports = SearchForm;