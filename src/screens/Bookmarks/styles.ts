import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const BookmarksContainer = styled.SafeAreaView`
  flex: 1;
`;

export const BookmarksContent = styled.ScrollView``;

export const BookmarksHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding: 0 ${RFValue(24)}px;
`;

export const BookmarksButton = styled.TouchableOpacity``;

export const BookmarksButtonIcon = styled.TouchableOpacity`
  margin-left: ${RFValue(20)}px;
`;

export const BookmarksTitle = styled.Text`
  flex: 1;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: ${RFValue(16)}px;
`;


// 
interface IBookMarksWrapperColumns {
  type: "grid" | "line";
}
export const BookMarksWrapperColumns = styled.View<IBookMarksWrapperColumns>`
  flex-direction: row;

  ${({ type }) => type === 'line' && css`
    flex-direction: grid;
  `};
`;

export const BookMarksColumnOne = styled.View`
  flex: 1;
  padding: ${RFValue(4)}px;
`;
export const BookMarksColumnTwo = styled.View`
  flex: 1;
  padding: ${RFValue(4)}px;
`;