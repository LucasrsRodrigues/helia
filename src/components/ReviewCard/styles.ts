import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ReviewCardContainer = styled.View`
  padding: ${RFValue(24)}px;

  background: ${({ theme }) => theme.colors.shape};

  shadow-color: #000000;
  shadow-offset: {width: 0, height: 7 };
  shadow-opacity:  0.21;
  shadow-radius: 8px;
  elevation: 10;

  margin-top: 20px;

  border-radius: ${RFValue(16)}px;
`;

export const ReviewCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const ReviewCardImage = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 50%;
`;

export const ReviewCardInfo = styled.View`
  flex: 1;
  margin-left: ${RFValue(10)}px;
`;

export const ReviewCardName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.fonts.title};
  font-size: ${RFValue(16)}px;
`;

export const ReviewCardDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.fonts.text};
  font-size: ${RFValue(12)}px;
`;

export const ReviewCardButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary[500]};
  flex-direction: row;
  align-items: center;


  padding: ${RFValue(6)}px ${RFValue(16)}px;
  border-radius: 50%;
`;

export const ReviewCardNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.others.white};
  font-size: ${RFValue(14)}px;

  margin-left:8px;
`;

export const ReviewCardComment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fonts.title};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.6)}px

  margin-top:${RFValue(12)}px;
`;