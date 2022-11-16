import React from 'react';
import LogoImg from '../../assets/logo/logo.png';

import * as S from './styles';
import { BookmarkLight, FilterLight, NotificationLight, SearchLight, StarBold } from '../../assets/icons';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

let filters = [
  'Recommended',
  'Popular',
  'Trending',
  'Nearby'
]

export function Dashboard() {
  const theme = useTheme();

  return (
    <S.DashboardContainer>
      <S.DashboardContent>
        <S.Header>
          <S.WrapperLogo>
            <S.LogoImage source={LogoImg} />
            <S.Hero>Helia</S.Hero>
          </S.WrapperLogo>

          <S.HeaderButtons>
            <S.HeaderButton>
              <NotificationLight width={28} height={28} />
            </S.HeaderButton>

            <S.HeaderButton>
              <BookmarkLight width={28} height={28} />
            </S.HeaderButton>
          </S.HeaderButtons>
        </S.Header>

        <S.HelloMessage>
          Hello, Lucas 👋
        </S.HelloMessage>

        <S.InputSearch>
          <SearchLight stroke={theme.colors.icon} />
          <S.Input placeholder='Search' />
          <FilterLight stroke={theme.colors.primary[500]} />
        </S.InputSearch>

        <S.WrapperFilterOptions horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((value, index) => (
            <S.FilterOption key={index}>
              <S.FilterOptionText>{value}</S.FilterOptionText>
            </S.FilterOption>
          ))}
        </S.WrapperFilterOptions>

        <S.WrapperHighlights>
          <S.HighlightsCard source={{ uri: 'https://pousadasurucua.com.br/wp-content/uploads/2020/05/Quarto-Luxo-Qu%C3%A1druplo-do-Hotel-Pousada-Surucu%C3%A1-em-Bonito-MS.jpg' }}>
            <S.HighlightsNote>
              <StarBold fill="#fff" width={RFValue(10)} height={RFValue(10)} />
              <S.Note>4.8</S.Note>
            </S.HighlightsNote>

            <S.HighlightsData>
              <S.HighlightsTitle>Emeralda De Hotel</S.HighlightsTitle>
              <S.HighlightsLocale>Paris, France</S.HighlightsLocale>
            </S.HighlightsData>

            <S.HighlightValue>
            </S.HighlightValue>
          </S.HighlightsCard>
        </S.WrapperHighlights>

      </S.DashboardContent>
    </S.DashboardContainer>
  );
}