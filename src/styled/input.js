import styled, {css} from 'styled-components';

const placeholder = css`
  opacity: 0.6;
  color: rgba(255, 255, 255, 0.7);
`;

export const Input = styled.input.attrs(({type}) => ({type: type || 'text'}))`
  font-family: Montserrat Bold, sans-serif;
  border: 1px #a4b9c7 solid;
  text-align: center;
  opacity: 1;
  width: 100%;
  color: #fff;
  background: transparent;
  border-radius: 0;
  padding: 0.2rem 0.75rem;
  font-size: 1.5rem;
  display: block;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  &:active,
  &:focus {
    background: transparent;
    box-shadow: none;
    outline: none;
    color: white;
  }
  &:-webkit-autofill::first-line {
    font-size: initial;
    line-height: inherit;
    font-family: 'Gentleman', Arial, sans-serif;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    font-family: 'Gentleman', Arial, sans-serif;
    transition: background-color 5000s;
    background: transparent !important;
    -webkit-text-fill-color: #fff !important;
  }
  &::-webkit-input-placeholder {
    ${placeholder}
  }
  &:-moz-placeholder {
    ${placeholder}
  }
  &:-ms-input-placeholder {
    ${placeholder}
  }
  &::placeholder {
    ${placeholder}
  }
  ${({$bsStyle}) => $bsStyle || ''}
`;
