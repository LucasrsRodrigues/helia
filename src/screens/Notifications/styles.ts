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

export const NotificationsContent = styled.ScrollView``;

export const NotificationDay = styled.Text``;

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
`;