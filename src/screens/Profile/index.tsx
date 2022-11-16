import React from 'react';
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/logo/logo.png';

import * as S from './styles';
import { EditSquare } from '../../assets/icons';

export function Profile() {
  return (
    <S.ProfileContainer>
      <StatusBar style='light' />

      <S.ProfileHeader>
        <S.Logo>
          <S.LogoImage source={logo} />

          <S.LogoLabel>Profile</S.LogoLabel>
        </S.Logo>
      </S.ProfileHeader>

      <S.ProfileWrapperData>
        <S.ProfileUser>
          <S.ProfilePicture source={{ uri: 'https://github.com/LucasrsRodrigues.png' }} />
          <S.ProfileEditButton>
            <EditSquare fill="#1AB65C" width={30} height={30} />
          </S.ProfileEditButton>
        </S.ProfileUser>
      </S.ProfileWrapperData>
    </S.ProfileContainer>
  );
}