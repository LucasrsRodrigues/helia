import React from 'react';
import LogoImg from '../../assets/logo/logo.png';

import { BookmarkBold, BookmarkLight, FilterLight, NotificationLight, SearchLight, StarBold } from '../../assets/icons';
import { useTheme } from 'styled-components/native';
import { HighlightsCard } from '../../components/HighlightsCard';
import { filters, highlights, recentlyBooked } from '../../server';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { HotelCard } from '../../components/HotelCard';



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
              <BookmarkLight width={28} height={28} stroke="#000" />
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

        <S.WrapperHighlights horizontal showsHorizontalScrollIndicator={false}>
          {highlights.map(hotel => <HighlightsCard key={hotel.id} hotel={hotel} />)}
        </S.WrapperHighlights>

        <S.SectionBooked>
          <S.SectionBookedHeader>
            <S.SectionBookedTitle>Recently Booked</S.SectionBookedTitle>
            <S.SectionBookedButton>
              <S.SectionBookedButtonText>See All</S.SectionBookedButtonText>
            </S.SectionBookedButton>
          </S.SectionBookedHeader>

          {recentlyBooked.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}

        </S.SectionBooked>
      </S.DashboardContent>
    </S.DashboardContainer>
  );
}