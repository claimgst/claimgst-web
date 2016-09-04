import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/authAction';

class SigninForm extends Component {
  constructor(props) {
    super(props);
    const redirectRoute = this.props.location.query.next || '/dashboard';
    this.state = {
      email: '',
      password: '',
      redirectTo: redirectRoute
    }
  }
  handleInputChange(event) {
    var nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }
  handleSubmit(event) {
    event.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    var redirectTo = this.state.redirectTo;
    if (!email || !password) {
      return;
    }
    this.props.dispatch(signInUser(email, password, redirectTo));
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={(event) => this.handleInputChange(event)}
                  placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(event) => this.handleInputChange(event)}
                  placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  className="btn btn-default"
                  onClick={(event) => this.handleSubmit(event)}>
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userEmail: state.auth.userEmail,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(SigninForm);