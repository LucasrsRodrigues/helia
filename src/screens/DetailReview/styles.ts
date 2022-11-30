import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const DetailReviewContainer = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const DetailReviewContent = styled.ScrollView`
  flex: 1;
`;

// header


export const DetailReviewHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding:0  ${RFValue(24)}px;
`;

export const DetailReviewButton = styled.TouchableOpacity``;

export const DetailReviewTitle = styled.Text`
  flex: 1;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: ${RFValue(16)}px;
`;

// DetailReviewFilter
export const DetailReviewFilter = styled.ScrollView`
  margin-top: ${RFValue(24)}px;
`;

interface IFilter {
  active: boolean;
}

export const Filter = styled.TouchableOpacity<IFilter>`
  padding: 8px 20px;

  flex-direction: row;
  align-items: center;

  border-radius: 100%;
  margin-right: ${RFValue(3)}px;

  background: ${({ theme }) => theme.colors.shape};
  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.primary[500]};

  ${({ active }) => active && css`
    background: ${({ theme }) => theme.colors.primary[500]};  
  `};



`;

export const FilterLabel = styled.Text<IFilter>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};

  margin-left: 8px;

  color: ${({ theme }) => theme.colors.primary[500]};

  ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.others.white}; 
  `};

`;

export const DetailReviewRating = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 0 ${RFValue(24)}px;
  margin: ${RFValue(20)}px 0;
`;

export const DetailReviewWrapper = styled.View`
  padding:0 ${RFValue(24)}px;
`;

export const DetailReviewLabel = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const DetailReviewNote = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary[500]};


  margin: 0 8px;
`;

export const DetailReviewCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.fonts.title};
`;