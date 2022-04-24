import styled from 'styled-components';

import {Button} from 'styled/button';

export const Container = styled.div`
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(#084e84, #013c67);
  height: 691px;
  width: 714px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const Content = styled.div`
  background: #003b66;
  height: 600px;
  width: 595px;
  box-shadow: 0 -30px 30px #084e82, none;
  color: #fff;
  font-family: Monserrat Regular, sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 20px;
  font-family: Montserrat Bold, sans-serif;
  font-size: 1.9rem;
  margin: 25px 0;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 40px;
`;

export const GetButton = styled(Button)`
  background: #17a98c;
  width: calc(65% - 5px);
  margin-right: 5px;
  min-height: 60px;
  font-size: 1.44rem;
`;

export const DetailButton = styled(Button)`
  background: #0a528a;
  width: calc(35% - 5px);
  margin-left: 5px;
  font-size: 0.9rem;
  min-height: 60px;
  line-height: 16px;
`;

export const PartialFee = styled.div`
  background: #00355c;
  margin: 30px 40px 0 40px;
  font-family: Montserrat Bold, sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px 30px;
  label {
    font-size: 1.1rem;
  };
  span {
    font-size: 2.4rem;
  };
`;
