import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { keyPressEmail, keyPressPassword, requestLogin, login } from '../../actions';

import LoginForm from '../../components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user) {
      browserHistory.push('/sample');
    }
  }

  handleEmail(email) {
    this.props.dispatch(keyPressEmail(email))
  }

  handlePassword(password) {
    this.props.dispatch(keyPressPassword(password));
  }

  handleLogin() {
    const { dispatch, email, password } = this.props;
    dispatch(requestLogin(email));
    dispatch(login(email, password));
  }

  render() {
    const { email, password, user } = this.props;
    const hasLoginError = this.props.user.error;
    return (
      <div>
        <LoginForm email={email}
                   password={password}
                   user={user}
                   handleEmail={this.handleEmail}
                   handlePassword={this.handlePassword} />
        <div className="login-error">
          {hasLoginError ? 'Error logging in. ' + this.props.user.error : null}
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { email, password, user } = state;
  return {
    email,
    password,
    user
  };
}

export default connect(mapStateToProps)(Login);