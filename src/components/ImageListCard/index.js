import React from 'react';
import { Image } from 'react-native';
import arrow from '../../assets/arrow.png';

import {
  Container,
  PhotoInfoContainer,
  PhotoImageContainer,
  PhotoText,
} from './styles';

const ImageListCard = ({ source, children, ...rest }) => {
  return (
    <Container {...rest}>
      <PhotoInfoContainer>
        <PhotoImageContainer>
          <Image source={{ uri: source }} style={{ width: 75, height: 75 }} />
        </PhotoImageContainer>
        <PhotoText>{children}</PhotoText>
      </PhotoInfoContainer>
      <Image source={arrow} />
    </Container>
  );
};

export default ImageListCard;
