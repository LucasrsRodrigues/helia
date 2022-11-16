import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DashboardContainer = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const DashboardContent = styled.ScrollView`
  width: 100%;
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
  margin-left: 24px;
  margin-top: 24px;
`;

export const HighlightsCard = styled.ImageBackground`
  height: 400px;
  width: 300px;
  border-radius: 36px;
  background:#000;
  overflow: hidden;
  position: relative;
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
export const HighlightsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
  font-size: ${RFValue(24)}px;
`;
export const HighlightsLocale = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #fff;
  font-size: ${RFValue(16)}px;
`;

export const HighlightValue = styled.View``;