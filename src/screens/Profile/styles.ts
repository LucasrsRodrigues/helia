import styled from "styled-components/native";

export const ProfileContainer = styled.SafeAreaView`
  flex: 1;

  background: #181A20;
`;

export const ProfileHeader = styled.View``;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius:12px;
`;

export const LogoLabel = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-left: 16px;
  font-weight: 700;
`;

// ProfileWrapperData
export const ProfileWrapperData = styled.View`
  width: 100%;
  background:red;
`;

export const ProfileUser = styled.View`
  position: relative;
`;

export const ProfilePicture = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100%;
`;

export const ProfileEditButton = styled.TouchableOpacity`
  background: #000;
  position: absolute;
  right: 0;
`;