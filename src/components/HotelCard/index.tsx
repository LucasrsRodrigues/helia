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
    reviewsCount?: string;
    isFavorite: boolean;
  },
  type?: 'line' | 'grid';
}

export function HotelCard({ hotel, type = 'line' }: IHotelCardProps) {
  const theme = useTheme();

  if (type === 'line') {
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
    )
  }

  return (
    <S.HotelCardLine>
      <S.HotelCardLineImage source={{ uri: hotel.image }} />

      <S.HotelCardLineTitle>
        {hotel.title}
      </S.HotelCardLineTitle>

      <S.HotelCardLineStarLocale>
        <StarBold fill={theme.colors.secondary[500]} width={RFValue(10)} height={RFValue(9.5)} />

        <S.HotelCardLineNote>{hotel.note}</S.HotelCardLineNote>
        <S.HotelCardLineLocale>{hotel.locale}</S.HotelCardLineLocale>

      </S.HotelCardLineStarLocale>

      <S.HotelCardLineValue>
        <S.HotelValuePrice>R${hotel.value}</S.HotelValuePrice>
        <S.HotelCardLineLorem>/ night</S.HotelCardLineLorem>

        <S.HotelLineIsFavoriteButton>
          {hotel.isFavorite ? (
            <BookmarkBold fill={theme.colors.primary[500]} width={RFValue(18)} height={RFValue(22)} />
          ) : (
            <BookmarkLight width={RFValue(18)} height={RFValue(22)} stroke={theme.colors.primary[500]} />
          )}
        </S.HotelLineIsFavoriteButton>
      </S.HotelCardLineValue>
    </S.HotelCardLine>
  );
}