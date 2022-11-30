import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StarBold } from '../../assets/icons';

import * as S from './styles';

interface IReviewCard {
  review: {
    image: string;
    name: string;
    date: string;
    note: number;
    comment: string;
  };
}

export function ReviewCard({ review }: IReviewCard) {
  return (
    <S.ReviewCardContainer>
      <S.ReviewCardHeader>
        <S.ReviewCardImage source={{ uri: review.image }} />

        <S.ReviewCardInfo>
          <S.ReviewCardName>{review.name}</S.ReviewCardName>
          <S.ReviewCardDate>{review.date}</S.ReviewCardDate>
        </S.ReviewCardInfo>

        <S.ReviewCardButton>
          <StarBold fill="#fff" width={RFValue(10)} height={RFValue(9.5)} />
          <S.ReviewCardNumber>{review.note}</S.ReviewCardNumber>
        </S.ReviewCardButton>
      </S.ReviewCardHeader>

      <S.ReviewCardComment>
        {review.comment}
      </S.ReviewCardComment>
    </S.ReviewCardContainer>
  );
}