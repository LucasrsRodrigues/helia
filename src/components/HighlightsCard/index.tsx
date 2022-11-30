import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { BookmarkBold, BookmarkLight, StarBold } from '../../assets/icons';

import * as S from './styles';

interface IHighlightsCardProps {
  hotel: {
    id: string;
    note: string;
    title: string;
    image: string;
    locale: string;
    value: number;
    isFavorite: boolean;
  }
}

export function HighlightsCard({ hotel }: IHighlightsCardProps) {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <S.HighlightWrapperButton onPress={() => navigate('HotelDetails')} activeOpacity={0.9}>

      <S.HighlightsCard source={{ uri: hotel.image }}>
        <S.HighlightOverlay colors={['transparent', 'rgba(0,0,0,0.8)']} />
        <S.HighlightsNote>
          <StarBold fill="#fff" width={RFValue(10)} height={RFValue(10)} />
          <S.Note>{hotel.note}</S.Note>
        </S.HighlightsNote>

        <S.HighlightsGroup>
          <S.HighlightsData>
            <S.HighlightsTitle>{hotel.title}</S.HighlightsTitle>
            <S.HighlightsLocale>{hotel.locale}</S.HighlightsLocale>
          </S.HighlightsData>

          <S.HighlightValue>
            <S.HighlightValueText>R$ {hotel.value}</S.HighlightValueText>
            <S.HighlightValueLorem>/ per night</S.HighlightValueLorem>
          </S.HighlightValue>
        </S.HighlightsGroup>
        <S.HighlightButton>
          {hotel.isFavorite ? <BookmarkBold width={RFValue(28)} height={RFValue(28)} fill={theme.colors.primary[500]} /> : <BookmarkLight width={RFValue(28)} height={RFValue(28)} stroke="#fff" />}
        </S.HighlightButton>
      </S.HighlightsCard>
    </S.HighlightWrapperButton>

  );
}