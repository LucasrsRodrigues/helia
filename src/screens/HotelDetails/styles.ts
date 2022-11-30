import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const WrapperHotelDetails = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const HotelDetailsContainer = styled.ScrollView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const HotelDetailsHeader = styled.View`
  position: absolute;
  width: 100%;
  flex-direction: row;
  top: ${RFValue(54)}px;

  z-index: 999;
  padding: ${RFValue(24)}px;
`;

export const HotelDetailsButtonBack = styled.TouchableOpacity`
  flex: 1;
`;

export const HotelDetailsButton = styled.TouchableOpacity`
  margin-left: ${RFValue(16)}px;
`;

export const HotelDetailsSlide = styled.View``;

export const HotelDetailsImage = styled.Image`
  height: ${RFValue(300)}px;
`;

export const HotelDetailsNamePlace = styled.View`
  padding: ${RFValue(24)}px;
`;

export const HotelDetailsName = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const HotelDetailsWrapperPlace = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const HotelDetailsPlace = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fonts.text};

  margin-top: 20px;
`;

export const HotelDetailsDivider = styled.View`
  width: 100%;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.others.gray100};

  margin: ${RFValue(32)}px 0 ${RFValue(10)}px;
`;

// 
export const HotelDetailsPhotosSection = styled.View`
  width: 100%;
`;

export const PhotosSectionHeader = styled.View`
  flex-direction: row;
  padding: 0 ${RFValue(24)}px;

  align-items: flex-end;
  justify-content: space-between;
`;

export const HotelDetailsSectionTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.fonts.title};
`;

export const HotelNote = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: ${RFValue(16)}px;
`;

export const PhotosSectionButton = styled.TouchableOpacity``;

export const PhotosSectionButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary[500]};
`;


export const HotelDetailsPhotosCarrousel = styled.ScrollView``;

export const HotelCarouselImage = styled.Image`
  width: ${RFValue(140)}px;
  height: ${RFValue(100)}px;

  border-radius: ${RFValue(16)}px;

  margin-left: ${RFValue(15)}px;
  margin-top: ${RFValue(16)}px;
`;

// 
export const HotelDetailsDifferentials = styled.View`
  padding: 0 ${RFValue(24)}px;
`;

// FacilitsCard
export const FacilitsCard = styled.View`
  align-items: center;
  margin-top: 20px;
  padding: 0 12px;
`;

export const HotelDetailsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Facily = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
`;

export const FacilyTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.fonts.text};

  text-align: center;
`;


export const HotelDetailsDescription = styled.View`
   padding: 0 ${RFValue(24)}px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19)}px;

  color: ${({ theme }) => theme.colors.fonts.text};
  margin-top: 16px;
`;


export const HotelDetailsFacilites = styled.View`
  padding: ${RFValue(24)}px;
`;


export const HotelDetailsLocation = styled.View`
  padding: ${RFValue(24)}px;

`;

export const HotelDetailsMap = styled.Image`
  width: ${RFValue(300)}px;

  margin-top: 16px;
`;



export const HotelDetailsReview = styled.View`
  margin-bottom: 20px;
  padding: 0 ${RFValue(24)}px;
`;

export const HotelReviewHeader = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const HotelReviewLeft = styled.View`
  flex-direction: row;
  align-items: center;

  margin-left: ${RFValue(12)}px;
`;

export const HotelReviewsCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fonts.text};
  font-size: ${RFValue(12)}px;

  margin-left: ${RFValue(8)}px;
`;

export const HotelsButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const HotelsButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: ${RFValue(16)}px;
`;




// ReviewCard
export const ReviewCard = styled.View`
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

export const ViewMoreButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: ${RFValue(16)}px;

  background: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 100px;


  margin-top: ${RFValue(20)}px;
`;

export const ViewMoreButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: ${RFValue(16)}px;
`;


// HotelPriceModal
export const HotelPriceModal = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(24)}px ${RFValue(24)}px ${getBottomSpace() + 36}px; 

  border-top-left-radius:${RFValue(24)}px;
  border-top-right-radius:${RFValue(24)}px;

  border: 1px solid #eee;

  flex-direction: row;
  align-items: center;
`;

export const HotelModalButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary[500]};
  padding: ${RFValue(10)}px;
  border-radius: 100%;
  flex :1;

  margin-left: 16px;
`;

export const HotelModalButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.others.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;

  text-align: center;
`;

export const WrapperValue = styled.View`
  flex-direction: row;
  align-items: flex-end;

`;

export const HotelValue = styled.Text`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;

export const HotelLorem = styled.Text`
  color: ${({ theme }) => theme.colors.fonts.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
