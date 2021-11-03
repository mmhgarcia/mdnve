import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled.button`
  color: ${(props) => props.fg};
  background-color: ${(props) => props.bg};
  border-radius: 14px;
  font-size: 1.5em;
  border: 3px solid blue;
  padding: 7px;
  font-weight: 600;
  margin-left: 10px;
  &:hover {
    color: white;
    font-weight: 600;
    background-color: green;
  }
`;

//Boton para Ir atras (Regresar)
export const BackButton = styled(Link)`
  background-color: white;
  color: red;
  font-weight: 600;
  font-size: 18px;
`;

export const Contenedor = styled.div`
  border: 2px solid gray;
  border-radius: 7px;
  background-color: 	#EEE8AA;
  color: black;
  font-weight: 600;
  height: auto;  

  @media screen and (max-width: 600px){
    margin: 10px 10px 15px 10px;
    padding: 20px 20px 20px 20px;
  }

`;