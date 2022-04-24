import styled from 'styled-components';

export const Button = styled.button.attrs({type: 'button'})`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 8px 12px;
  background: dimgrey;
  cursor: pointer;
  border: none;
  font-family: Montserrat Bold, sans-serif;
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  max-height: 50px;
  justify-content: center;
  &:disabled {
    cursor: default;
  };
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  };
  ${({$bsStyle}) => $bsStyle || ''}
`;
