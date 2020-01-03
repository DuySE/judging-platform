import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  InnerWrapper,
  Label,
  TextFieldWrapper,
  TextField,
  ButtonWrapper,
  Button,
  LinkWrapper,
} from '../../styles/GeneralWrapper';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  render() {
    const { username, password } = this.state;
    const { login, data, error } = this.props;
    return (
      <Wrapper>
        <InnerWrapper>
          <Label>Account Login</Label>
          <TextFieldWrapper>
            <TextField type="text" placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })} />
            <TextField type="password" placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })} />
          </TextFieldWrapper>
          <ButtonWrapper>
            <Button onClick={() => login(username, password)}>LOGIN</Button>
          </ButtonWrapper>
          <LinkWrapper>
            <div>Forgot Username / Password?</div>
            <div>Create an account? <Link to="/register">Sign up</Link></div>
            {data ? (<div>Login successfully!</div>) : error}
          </LinkWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }
}