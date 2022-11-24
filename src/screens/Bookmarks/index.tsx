import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowLeftLight, CategoryBold, DocumentLight } from '../../assets/icons';
import { useTheme } from 'styled-components/native';


import { bookmark } from '../../server/hotels';
import { HotelCard } from '../../components/HotelCard';

import * as S from './styles';

export function Bookmarks() {
  const theme = useTheme();
  const [displayOption, setDisplayOption] = useState<"grid" | "line">('grid');

  const { goBack } = useNavigation();

  return (
    <S.BookmarksContainer>
      <S.BookmarksHeader>
        <S.BookmarksButton onPress={goBack}>
          <ArrowLeftLight width={RFValue(28)} height={RFValue(28)} />
        </S.BookmarksButton>

        <S.BookmarksTitle>
          My Bookmark
        </S.BookmarksTitle>

        <S.BookmarksButtonIcon onPress={() => setDisplayOption('line')} activeOpacity={0.9}>
          <DocumentLight
            width={RFValue(20)}
            height={RFValue(20)}
            stroke={displayOption === 'line' ? theme.colors.primary[500] : theme.colors.fonts.title}
          />
        </S.BookmarksButtonIcon>

        <S.BookmarksButtonIcon onPress={() => setDisplayOption('grid')} activeOpacity={0.9}>
          <CategoryBold
            width={RFValue(20)}
            height={RFValue(20)}
            fill={displayOption === 'grid' ? theme.colors.primary[500] : theme.colors.fonts.title}
          />
        </S.BookmarksButtonIcon>
      </S.BookmarksHeader>

      <S.BookmarksContent>
        <S.BookMarksWrapperColumns type={displayOption}>

          <S.BookMarksColumnOne>
            {bookmark.filter((_, index) => index % 2 === 0).map(book => (
              <HotelCard key={book.id} hotel={book} type={displayOption} />
            ))}
          </S.BookMarksColumnOne>

          <S.BookMarksColumnTwo>
            {bookmark.filter((_, index) => index % 2 === 1).map(book => (
              <HotelCard key={book.id} hotel={book} type={displayOption} />
            ))}
          </S.BookMarksColumnTwo>
        </S.BookMarksWrapperColumns>

      </S.BookmarksContent>
    </S.BookmarksContainer>
  );
}