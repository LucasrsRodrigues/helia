import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DashboardContainer = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const DashboardContent = styled.ScrollView`
  width: 100%;
`;

export const DashboardTouch = styled.KeyboardAvoidingView`
  flex :1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 24px;
  justify-content: space-between;
`;

// Logo
export const WrapperLogo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: 12px;
`;

export const Hero = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const HeaderButton = styled.TouchableOpacity`
  margin-left: 20px;
`;


export const HelloMessage = styled.Text`
  font-size:${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.fonts.title};
  margin-left: 24px;
`;


// Input

export const InputSearch = styled.View`
  padding: 18px 20px;
  background: ${({ theme }) => theme.colors.input.background};
  border-radius: 12px;
  
  margin: 24px;

  border :2px solid ${({ theme }) => theme.colors.input.background};

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0 12px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
// FilterOption
export const WrapperFilterOptions = styled.ScrollView`
  margin-left: 24px;
`;

export const FilterOption = styled.TouchableOpacity`
  padding: 8px 20px;

  /* Active */
  background: ${({ theme }) => theme.colors.primary[500]};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};

  /* Default */
  background: ${({ theme }) => theme.colors.others};
  
  border-radius:100px;

  margin-right:12px;
`;

export const FilterOptionText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;

  /* Active */
  color: ${({ theme }) => theme.colors.primary[500]};
`;


// HighlightsCard
export const WrapperHighlights = styled.ScrollView`
  /* margin-left: 24px; */
  margin-top: 24px;
`;

// SectionBooked
export const SectionBooked = styled.View`
  width: 100%;
  padding: 24px;

`;

export const SectionBookedHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SectionBookedTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const SectionBookedButton = styled.TouchableOpacity`

`;

export const SectionBookedButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary[500]};
`;


// HotelCard
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
`;

export const HotelImage = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(16)}px;
  margin-right: 16px;
`;

export const HotelInfo = styled.View`
`;

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