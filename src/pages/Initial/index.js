import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, MascotImage } from './styles';

import logoSigma from '../../assets/logosigma.png';
import mascot from '../../assets/mascot.png';

const Initial = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={logoSigma} />
      <MascotImage source={mascot} />
      <Button
        onPress={() => {
          navigation.navigate('PhotoList');
        }}>
        Prosseguir
      </Button>
    </Container>
  );
};

export default Initial;
