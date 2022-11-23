import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const NotificationsContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const NotificationsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding: ${RFValue(24)}px;
`;

export const NotificationsButton = styled.TouchableOpacity``;

export const NotificationsContent = styled.ScrollView`
  padding: ${24}px;
`;

export const NotificationDay = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const NotificationsTitle = styled.Text`
  flex: 1;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: ${RFValue(16)}px;
`;

export const NotificationCard = styled.View`
  width: 100%;
  padding: 16px;

  background: ${({ theme }) => theme.colors.shape};
  shadow-color: #000000;
  shadow-offset: {width: 0, height: 7 };
  shadow-opacity:  0.21;
  shadow-radius: 8px;
  elevation: 10;

  margin-top: 24px;
  margin-bottom: 24px;

  border-radius: ${16}px;

  flex-direction: row;
  align-items: center;
  
`;

export const NotificationWrapper = styled.View`
  margin-left: 20px;
`;

export const NotificationTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const NotificationMessage = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.fonts.text};

  margin-top: 6px;
`;