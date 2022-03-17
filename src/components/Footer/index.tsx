import React from 'react';

import { Container, Line } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
        <a href="/">Whatsapp</a>
        <a href="/">Instagram</a>
        <a href="/">Linkedin</a>
        <a href="/">Github</a>
        <a href="/">Facebook</a>
        <Line />     
      </Container>

      
  );
}

export default Footer;