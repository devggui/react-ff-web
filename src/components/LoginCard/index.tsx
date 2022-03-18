import React, { useState } from 'react';

import { 
  Container, 
  InputField, 
  SocialMedia, 
  FaceLogo,
  InstaLogo,
  WhatsLogo,
  LockLogo,
  UserLogo,
  EnvelopeLogo  
} from './styles';

const Login: React.FC = () => {

  const [layout, setLayout] = useState('');

  return (
    <Container>
      <div className={`container ${layout}`}>
        <div className="forms-container">
          <div className="signin-signup"> 
            <form action="" className="sign-in-form">            
              <h2 className="title">Sign In</h2>
              <InputField>
                <i>{ <UserLogo /> }</i>
                <input type="text" placeholder="Username" />
              </InputField>
              <InputField>
                <i><LockLogo /></i>
                <input type="password" placeholder="Password" />
              </InputField>          
                <input type="submit" value="Login" className="btn solid"/>            
              <SocialMedia>
                <a href="/">{ <FaceLogo /> }</a>
                <a href="/">{ <InstaLogo /> }</a>
                <a href="/">{ <WhatsLogo /> }</a>              
              </SocialMedia>            
            </form>
            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <InputField>
                <i><UserLogo /></i>
                <input type="text" placeholder="Username" />
              </InputField>
              <InputField>
                <i><LockLogo /></i>
                <input type="text" placeholder="E-mail" />
              </InputField>            
              <InputField>
                <i><EnvelopeLogo /></i>
                <input type="password" placeholder="Password" />
              </InputField>            
                <input type="submit" value="Sign Up" className="btn solid"/>        
              <SocialMedia>
                <a href="/">{ <FaceLogo /> }</a>
                <a href="/">{ <InstaLogo /> }</a>
                <a href="/">{ <WhatsLogo /> }</a> 
              </SocialMedia>                   
            </form>                    
          </div>
        </div>
        
        <div className="panels-container">        
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <button className="btn transparent" onClick={e => setLayout(!layout ? 'sign-up-mode' : '')} id="sign-up-btn">Sign up</button>
              <img src="assets/log.svg" className="image" alt="" />  
            </div>
          </div>
          
          <div className="panel right-panel">
            <div className="content">
              <h3>Onde of us?</h3>
              <button className="btn transparent" onClick={e => setLayout(!layout ? '' : '')} id="sign-in-btn">Sign in</button>
              <img src="assets/register.svg" className="image" alt="" />        
            </div>
          </div>        
        </div>
      </div>
    </Container>   
  );
}

export default Login;