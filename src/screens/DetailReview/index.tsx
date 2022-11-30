import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { ArrowLeftLight, BookmarkLight, MoreCircleLight, StarBold } from '../../assets/icons';
import { HotelCard } from '../../components/HotelCard';
import { ReviewCard } from '../../components/ReviewCard';
import { comments } from '../../server';

import * as S from './styles';

const filterOptions = [
  {
    id: "0",
    label: "All"
  },
  {
    id: "1",
    label: "5"
  },
  {
    id: "2",
    label: "4"
  },
  {
    id: "3",
    label: "3"
  },
  {
    id: "4",
    label: "2"
  },
  {
    id: "5",
    label: "1"
  }
];

export function DetailReview() {
  const [optionSelected, setOptionSelected] = useState("0");
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <S.DetailReviewContainer>
      <S.DetailReviewHeader>
        <S.DetailReviewButton onPress={goBack}>
          <ArrowLeftLight width={RFValue(28)} height={RFValue(28)} stroke="#000" />
        </S.DetailReviewButton>

        <S.DetailReviewTitle>
          Review
        </S.DetailReviewTitle>

        <S.DetailReviewButton>
          <MoreCircleLight width={RFValue(28)} height={RFValue(28)} stroke="#000" />
        </S.DetailReviewButton>
      </S.DetailReviewHeader>

      <S.DetailReviewContent>
        <S.DetailReviewFilter
          contentContainerStyle={{ paddingHorizontal: RFValue(24) }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {filterOptions.map((item) => (
            <S.Filter
              key={item.id}
              active={optionSelected === item.id}
              onPress={() => setOptionSelected(item.id)}
              activeOpacity={0.9}
            >
              <StarBold fill={optionSelected === item.id ? "#fff" : theme.colors.primary[500]} width={RFValue(16)} height={RFValue(16)} />
              <S.FilterLabel active={optionSelected === item.id}>{item.label}</S.FilterLabel>
            </S.Filter>
          ))}
        </S.DetailReviewFilter>

        <S.DetailReviewRating>
          <S.DetailReviewLabel>Rating</S.DetailReviewLabel>
          <StarBold fill={theme.colors.secondary[500]} width={RFValue(16)} height={RFValue(16)} />
          <S.DetailReviewNote>4.8</S.DetailReviewNote>
          <S.DetailReviewCount>(4.891 reviews)</S.DetailReviewCount>
        </S.DetailReviewRating>

        <S.DetailReviewWrapper>
          {comments.map((review) => (
            <ReviewCard review={review} />
          ))}
        </S.DetailReviewWrapper>



      </S.DetailReviewContent>
    </S.DetailReviewContainer>
  );
}