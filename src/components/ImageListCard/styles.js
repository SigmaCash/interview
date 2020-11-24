import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c6c6c6;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 28px 15px 15px;
  margin: 0 28px;
  margin-bottom: 22px;
`;

export const PhotoInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PhotoImageContainer = styled.View`
  width: 75px;
  height: 75px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #26cb17;
`;

export const PhotoText = styled.Text`
  margin-left: 10px;
`;
