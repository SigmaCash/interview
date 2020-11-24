import React from 'react';

import { useRoute } from '@react-navigation/native';

import {
  Container,
  PhotoContainer,
  PhotoImage,
  TitleContainer,
  TitleText,
  DescriptionContainer,
  DescriptionText,
} from './styles';

const PhotoInfo = ({ item }) => {
  const route = useRoute();

  const photoInfo = route.params.item;
  return (
    <Container>
      <PhotoContainer>
        <PhotoImage source={{ uri: photoInfo.url }} />
        <TitleContainer>
          <TitleText>{photoInfo.title}</TitleText>
        </TitleContainer>
        <DescriptionContainer>
          <DescriptionText>{photoInfo.description}</DescriptionText>
        </DescriptionContainer>
      </PhotoContainer>
    </Container>
  );
};

export default PhotoInfo;
