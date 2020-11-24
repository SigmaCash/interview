import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #26cb17;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 11px 50px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-family: 'Lato-Regular';
`;
