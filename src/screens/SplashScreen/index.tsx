import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import Logo from '../../assets/logo/big_logo.svg';
import Lottie from 'lottie-react-native';

import loading from '../../assets/loading.json';

import * as S from './styles';

// background: linear-gradient(286.17deg, #1AB65C 0%, #39E180 100%);


export function SplashScreen() {
  return (
    <S.SplashScreenContainer
      colors={['#1AB65C', '#39E180']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
    >
      <StatusBar barStyle='light-content' />

      <S.SplashScreenLogo>
        <Logo />
      </S.SplashScreenLogo>

      <S.SplashScreenLoading>
        <Lottie resizeMode='contain' autoPlay source={loading} loop />
      </S.SplashScreenLoading>
    </S.SplashScreenContainer>
  );
}