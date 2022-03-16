import styled from 'styled-components';

export const Container = styled.div`
  background: black;
  display: flex;  
  align-items: center;
  justify-content: space-between; 
  padding: 11px 16px;

  a {    
    color: white;
    margin-right: 50px;    
  }

  a.signin {
    color: red;
    
  }
`;

export const Items = styled.div`  
  display: flex;
`;
