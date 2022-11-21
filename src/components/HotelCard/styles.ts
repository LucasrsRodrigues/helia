import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HotelCard = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.shape};

  shadow-color: #000000;
  shadow-offset: {width: 0, height: 7 };
  shadow-opacity:  0.21;
  shadow-radius: 8px;
  elevation: 10;

  margin-top: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;

`;

export const HotelCardInfos = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  max-width: ${RFValue(200)}px;
`;

export const HotelImage = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(16)}px;
  margin-right: 16px;
`;

export const HotelInfo = styled.View``;

export const HotelName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const HotelPlace = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fonts.text};
  margin: 10px 0;
`;

export const HotelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HotelNote = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const HotelViewsCount = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fonts.text};
  margin-left: 8px;
`;

export const HotelCardPrice = styled.View`
  align-items: flex-end;
  justify-content: space-between;
`;

export const HotelPriceWrapper = styled.View``;

export const HotelCardValue = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const HotelLorem = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fonts.text};
  text-align: right;
`;

export const HotelIsFavoriteButton = styled.TouchableOpacity`
  margin-top: 19px;
`;