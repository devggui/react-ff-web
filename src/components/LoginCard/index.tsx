import React from 'react';

import { Container, FormsContainer, SigninSignup, SignForm, InputField, SocialMedia, SignupForm } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <FormsContainer>
        <SigninSignup>
          <SignForm>
            <InputField>
            </InputField>
            <SocialMedia>
            </SocialMedia>
          </SignForm>
          <SignupForm>
            <InputField>
            </InputField>
            <SocialMedia>
            </SocialMedia>
          </SignupForm>          
        </SigninSignup>
      </FormsContainer>
    </Container>
        

  );
}

export default Login;