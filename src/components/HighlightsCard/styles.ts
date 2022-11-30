import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HighlightOverlay = styled(LinearGradient)`
  flex:1;
`;

export const HighlightWrapperButton = styled.TouchableOpacity``;

export const HighlightsCard = styled.ImageBackground`
  height: ${RFValue(400)}px;
  width: ${RFValue(300)}px;
  border-radius: ${RFValue(15)}px;
  overflow: hidden;
  position: relative;

  margin-left: ${RFValue(13)}px;
`;

export const HighlightsNote = styled.View`
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 100%;
  
  flex-direction: row;
  align-items: center;

  position: absolute;
  right: 10px;
  top: 32px;
`;

export const Note = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: #fff;
`;

export const HighlightsData = styled.View``;

export const HighlightsGroup = styled.View`
  position: absolute;
  bottom: ${RFValue(15)}px;
  left: ${RFValue(20)}px;
`;

export const HighlightsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
  font-size: ${RFValue(24)}px;
`;

export const HighlightsLocale = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #fff;
  font-size: ${RFValue(16)}px;

  margin: 8px 0;
`;

export const HighlightValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HighlightValueText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.others.white};
`;

export const HighlightValueLorem = styled.Text`
 font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.others.white};
`;


export const HighlightButton = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: 32px;
`;