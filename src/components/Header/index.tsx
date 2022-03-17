import React from 'react';
import { Container, Items } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <a href="/">Trein.in</a>
      <Items>           
        <a href='/'>Sobre nós</a>
        <a href='/'>Treinos</a>
        <a href='/'>Campeonatos</a>
        <a href='/'>Contato</a>
        <a href="/login" className="signin">Sign in</a>
      </Items>
    </Container>
  );
}

export default Header;