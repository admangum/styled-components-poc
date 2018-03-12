import styled from 'styled-components';

const Button = styled.button`
  background: ${ props => props.theme.colors.secondaryColor }
  border: ${ props => props.theme.colors.secondaryColor }
  color: white;
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 5px;
`

export default Button;