import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signOutAndRedirect } from '../actions/authAction';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Claim GST</Link>
            </div>
            <div id="navbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  {
                    this.props.isAuthenticated
                    ? <p className="navbar-text">Howdy, {this.props.user.first_name}</p>
                    : <Link to="/sign_in">Sign In</Link>
                  }
                </li>
                {
                  this.props.isAuthenticated
                  ? <li><a href='#' onClick={() => this.props.dispatch(signOutAndRedirect())}>Sign Out</a> </li>
                  : ''
                }
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  const { isAuthenticated, user } = store.auth
  return {
    isAuthenticated,
    user
  };
}

export default connect(mapStateToProps)(MainContainer);