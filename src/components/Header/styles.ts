import styled from 'styled-components';

export const Container = styled.div`
  background: black;
  display: flex;  
  align-items: center;
  justify-content: space-between; 
  padding: 11px 16px;
  flex-wrap: wrap;

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
  flex-wrap: wrap;

  a:hover {
    color: white;
    opacity: 0.8;
    transition: 0.5s;   
  }
`;
