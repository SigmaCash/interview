import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const PhotoContainer = styled.View`
  margin: 32px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #c6c6c6;
  background-color: #fff;
`;

export const PhotoImage = styled.Image`
  width: 350px;
  height: 350px;
`;

export const TitleContainer = styled.View`
  padding: 16px 25px;
  border-bottom-width: 1px;
  border-bottom-color: #c6c6c6;
`;

export const TitleText = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 20px;
`;

export const DescriptionContainer = styled.View`
  padding: 16px 25px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  font-family: 'Lato-Regular';
`;
