import styled from 'styled-components';

export const EmptyPage = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  ${({$bsStyle}) => $bsStyle || ''}
`;
