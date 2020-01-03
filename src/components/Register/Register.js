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
  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <Label>Account Register</Label>
          <TextFieldWrapper>
            <TextField type="text" placeholder="Username" />
            <TextField type="password" placeholder="Password" />
            <TextField type="text" placeholder="First Name" />
            <TextField type="text" placeholder="Last Name" />
          </TextFieldWrapper>
          <ButtonWrapper>
            <Button>REGISTER</Button>
          </ButtonWrapper>
          <LinkWrapper>
            <div>Already have an account? <Link to="/">Login</Link></div>
          </LinkWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }
}
