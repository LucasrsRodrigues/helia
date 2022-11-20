import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const SplashScreenContainer = styled(LinearGradient)`
  flex:1;
  background: green;
  align-items: center;
`;

export const SplashScreenLogo = styled.View`
  flex:1;
  justify-content: center;
`;

export const SplashScreenLoading = styled.View`
  width: 100%;
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
`;