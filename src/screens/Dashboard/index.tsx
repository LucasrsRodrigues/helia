import React from 'react';
import LogoImg from '../../assets/logo/logo.png';

import { BookmarkLight, FilterLight, NotificationLight, SearchLight } from '../../assets/icons';
import { useTheme } from 'styled-components/native';
import { HighlightsCard } from '../../components/HighlightsCard';
import { filters, highlights, recentlyBooked } from '../../server';

import { HotelCard } from '../../components/HotelCard';

import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export function Dashboard() {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <S.DashboardContainer>
      <S.DashboardContent>
        <S.DashboardTouch>

          <S.Header>
            <S.WrapperLogo>
              <S.LogoImage source={LogoImg} />
              <S.Hero>Helia</S.Hero>
            </S.WrapperLogo>

            <S.HeaderButtons>
              <S.HeaderButton onPress={() => navigate('Notifications')}>
                <NotificationLight width={RFValue(28)} height={RFValue(28)} />
              </S.HeaderButton>

              <S.HeaderButton>
                <BookmarkLight width={RFValue(28)} height={RFValue(28)} stroke="#000" />
              </S.HeaderButton>
            </S.HeaderButtons>
          </S.Header>

          <S.HelloMessage>
            Hello, Lucas 👋
          </S.HelloMessage>

          <S.InputSearch>
            <SearchLight width={RFValue(20)} height={RFValue(20)} stroke={theme.colors.icon} />
            <S.Input placeholder='Search' />
            <FilterLight width={RFValue(20)} height={RFValue(20)} stroke={theme.colors.primary[500]} />
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
        </S.DashboardTouch>

      </S.DashboardContent>
    </S.DashboardContainer>
  );
}