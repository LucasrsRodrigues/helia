import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { BookmarkBold, BookmarkLight, StarBold } from '../../assets/icons';

import * as S from './styles';

interface IHotelCardProps {
  hotel: {
    id: string;
    note: string;
    title: string;
    image: string;
    locale: string;
    value: number;
    reviewsCount: number;
    isFavorite: boolean;
  }
}

export function HotelCard({ hotel }: IHotelCardProps) {
  const theme = useTheme();

  return (
    <S.HotelCard>
      <S.HotelCardInfos>
        <S.HotelImage source={{ uri: hotel.image }} />
        <S.HotelInfo>
          <S.HotelName>{hotel.title}</S.HotelName>
          <S.HotelPlace>{hotel.locale}</S.HotelPlace>
          <S.HotelWrapper>
            <StarBold fill={theme.colors.secondary[500]} />
            <S.HotelNote>{hotel.note}</S.HotelNote>
            <S.HotelViewsCount>({hotel.reviewsCount} reviews)</S.HotelViewsCount>
          </S.HotelWrapper>
        </S.HotelInfo>
      </S.HotelCardInfos>

      <S.HotelCardPrice>
        <S.HotelPriceWrapper>
          <S.HotelCardValue>R$ {hotel.value}</S.HotelCardValue>
          <S.HotelLorem>/ night</S.HotelLorem>
        </S.HotelPriceWrapper>

        <S.HotelIsFavoriteButton>
          {hotel.isFavorite ? (
            <BookmarkLight width={RFValue(18)} height={RFValue(22)} stroke={theme.colors.primary[500]} />
          ) : (
            <BookmarkBold fill={theme.colors.primary[500]} width={RFValue(18)} height={RFValue(22)} />
          )}
        </S.HotelIsFavoriteButton>
      </S.HotelCardPrice>
    </S.HotelCard>
  );
}