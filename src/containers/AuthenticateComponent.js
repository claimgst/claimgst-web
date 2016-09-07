import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export function authenticateComponent(Component) {

  class AuthenticateComponent extends Component {

    componentWillMount () {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth (isAuthenticated) {
      if (!isAuthenticated) {
        let redirectAfterSignin = this.props.location.pathname;
        this.props.dispatch(push(`/sign_in?next=${redirectAfterSignin}`));
      }
    }

    render () {
      return (
        <div>
          {
            this.props.isAuthenticated === true
            ? <Component {...this.props}/>
            : null
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticateComponent);

}