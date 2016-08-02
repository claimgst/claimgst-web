var React = require('react')

function SearchForm() {
  return (
     <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <form className="form-inline">
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Input ABN" />
              </div>
              <div className="input-group">
                <input type="date" className="form-control" placeholder="date" />
              </div>
            </div>
            <button className="btn btn-default" type="button">Search</button>
          </form>
        </div>
      </div>
    )
}

module.exports = SearchForm;