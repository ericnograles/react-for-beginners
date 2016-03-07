import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { keyPressEmail, keyPressPassword, requestLogin, login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
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
    return (
      <div>
        TODO: LoginForm forthcoming
      </div>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { email, password } = state;
  return {
    email,
    password
  };
}

export default connect(mapStateToProps)(Login);