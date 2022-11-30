import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const GalleryPhotosContainer = styled.View`
  flex:1;
  padding: ${getStatusBarHeight() + 33}px 0;
`;

export const GalleryPhotosHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding:0  ${RFValue(24)}px;
`;
export const GalleryPhotosWrapper = styled.View`
  padding: ${RFValue(24)}px;
`;

export const GalleryPhotosButton = styled.TouchableOpacity``;

export const GalleryPhotosTitle = styled.Text`
  flex: 1;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: ${RFValue(12)}px;
`;

export const Photo = styled.Image`
  width: 49%;
  height: ${RFValue(110)};
  border-radius: ${RFValue(12)}px;
  margin-bottom: 16px;
`;