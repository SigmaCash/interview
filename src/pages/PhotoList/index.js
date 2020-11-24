import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, ImageList, ErrorText } from './styles';
import ImageListCard from '../../components/ImageListCard';

const PhotoList = () => {
  const [photos, setPhotos] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    setLoading(true);
    api
      .get('/')
      .then(response => {
        setPhotos(response.data);
        setError(false);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
      });
  }, []);

  const navigatetoFullRead = useCallback(
    item => {
      navigate('PhotoInfo', { item });
    },
    [navigate],
  );

  return (
    <Container>
      {loading && !error ? (
        <ActivityIndicator size="large" color="#26CB17" />
      ) : (
          <ImageList
            data={photos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <ImageListCard
                onPress={() => navigatetoFullRead(item)}
                source={item.url}
              >
                {item.title}
              </ImageListCard>
            )}
          />
        )}
      {error ? (
        <ErrorText>Ocorreu um erro, recarregue a aplicação</ErrorText>
      ) : null}
    </Container>
  );
};

export default PhotoList;
