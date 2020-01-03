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

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }
  render() {
    const { username, password, firstName, lastName } = this.state;
    const { register, data, error } = this.props;
    return (
      <Wrapper>
        <InnerWrapper>
          <Label>Account Register</Label>
          <TextFieldWrapper>
            <TextField type="text" placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })} />
            <TextField type="password" placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })} />
            <TextField type="text" placeholder="First Name"
              onChange={e => this.setState({ firstName: e.target.value })} />
            <TextField type="text" placeholder="Last Name"
              onChange={e => this.setState({ lastName: e.target.value })} />
          </TextFieldWrapper>
          <ButtonWrapper>
            <Button onClick={() => register(username, password, firstName, lastName)}>REGISTER</Button>
          </ButtonWrapper>
          <LinkWrapper>
            <div>Already have an account? <Link to="/">Login</Link></div>
            {data ? (<div>Register successfully!</div>) : error}
          </LinkWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }
}
