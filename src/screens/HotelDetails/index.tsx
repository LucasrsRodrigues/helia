import { useNavigation } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { ArrowDown2Light, ArrowLeftLight, BookmarkLight, LocationBold, MoreCircleLight, StarBold } from '../../assets/icons';

import HotelIcon from '../../assets/facilites/hotels.png';
import BedIcon from '../../assets/facilites/bed.png';
import BathtubIcon from '../../assets/facilites/bathtub.png';
import SizeIcon from '../../assets/facilites/size.png';

import PoolIcon from '../../assets/facilites/pool.png';
import WifiIcon from '../../assets/facilites/wifi.png';
import Restaurantcon from '../../assets/facilites/restaurant.png';
import Parkingcon from '../../assets/facilites/parking.png';
import MeetingRoomIcon from '../../assets/facilites/meetingRoom.png';
import ElevatorIcon from '../../assets/facilites/elevator.png';
import FitnessIcon from '../../assets/facilites/Gym.png';
import OpenIcon from '../../assets/facilites/open.png';
// import HotelIcon from '../../assets/facilites/hotels.png';
// import HotelIcon from '../../assets/facilites/hotels.png';

import * as S from './styles';
import MapImage from '../../assets/map.png';
import { comments } from '../../server';

const data = [
  {
    id: "0",
    name: "Swimming\nPool",
    image: PoolIcon
  },
  {
    id: "1",
    name: "WiFi",
    image: WifiIcon
  },
  {
    id: "2",
    name: "Restaurant",
    image: Restaurantcon
  },
  {
    id: "3",
    name: "Parking",
    image: Parkingcon
  },
  {
    id: "4",
    name: "Meeting\nRoom",
    image: MeetingRoomIcon
  },
  {
    id: "5",
    name: "Elevator",
    image: ElevatorIcon
  },
  {
    id: "6",
    name: "Fitness\nCenter",
    image: FitnessIcon
  },
  {
    id: "7",
    name: "24-hours\nOpen",
    image: OpenIcon
  }
];

export function HotelDetails() {
  const { goBack } = useNavigation();
  const theme = useTheme();

  return (
    <S.WrapperHotelDetails>
      <S.HotelDetailsContainer showsVerticalScrollIndicator={false}>
        <S.HotelDetailsHeader>
          <S.HotelDetailsButtonBack onPress={goBack}>
            <ArrowLeftLight width={RFValue(28)} height={RFValue(28)} stroke="#fff" />
          </S.HotelDetailsButtonBack>

          <S.HotelDetailsButton>
            <BookmarkLight width={RFValue(28)} height={RFValue(28)} stroke="#fff" />
          </S.HotelDetailsButton>

          <S.HotelDetailsButton>
            <MoreCircleLight width={RFValue(28)} height={RFValue(28)} stroke="#fff" />
          </S.HotelDetailsButton>
        </S.HotelDetailsHeader>

        <S.HotelDetailsSlide>
          <S.HotelDetailsImage source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/0b/4a/0a/0b/quarto-hotel-curi.jpg" }} />
        </S.HotelDetailsSlide>

        <S.HotelDetailsNamePlace>
          <S.HotelDetailsName>Royale President Hotel</S.HotelDetailsName>

          <S.HotelDetailsWrapperPlace>
            <LocationBold fill={theme.colors.primary[500]} />
            <S.HotelDetailsPlace>79 Place de la Madeleine, Paris, 75009, France</S.HotelDetailsPlace>
          </S.HotelDetailsWrapperPlace>

          <S.HotelDetailsDivider />

        </S.HotelDetailsNamePlace>

        <S.HotelDetailsPhotosSection>

          <S.PhotosSectionHeader>
            <S.HotelDetailsSectionTitle>Gallery Photos</S.HotelDetailsSectionTitle>
            <S.PhotosSectionButton activeOpacity={0.9}>
              <S.PhotosSectionButtonText>See All</S.PhotosSectionButtonText>
            </S.PhotosSectionButton>
          </S.PhotosSectionHeader>

          <S.HotelDetailsPhotosCarrousel horizontal showsHorizontalScrollIndicator={false}>
            <S.HotelCarouselImage source={{ uri: "https://hotelrealexecutive.com.br/wp-content/uploads/2016/10/fachada.jpg" }} />
            <S.HotelCarouselImage source={{ uri: "https://hotelrealexecutive.com.br/wp-content/uploads/2016/10/fachada.jpg" }} />
            <S.HotelCarouselImage source={{ uri: "https://hotelrealexecutive.com.br/wp-content/uploads/2016/10/fachada.jpg" }} />
            <S.HotelCarouselImage source={{ uri: "https://hotelrealexecutive.com.br/wp-content/uploads/2016/10/fachada.jpg" }} />
            <S.HotelCarouselImage source={{ uri: "https://hotelrealexecutive.com.br/wp-content/uploads/2016/10/fachada.jpg" }} />
          </S.HotelDetailsPhotosCarrousel>
        </S.HotelDetailsPhotosSection>

        <S.HotelDetailsDifferentials>
          <S.HotelDetailsSectionTitle>Details</S.HotelDetailsSectionTitle>

          <S.HotelDetailsWrapper>
            <S.FacilitsCard>
              <S.Facily source={HotelIcon} />
              <S.FacilyTitle>Hotels</S.FacilyTitle>
            </S.FacilitsCard>

            <S.FacilitsCard>
              <S.Facily source={BedIcon} />
              <S.FacilyTitle>4 Bedrooms</S.FacilyTitle>
            </S.FacilitsCard>

            <S.FacilitsCard>
              <S.Facily source={BathtubIcon} />
              <S.FacilyTitle>2 Bathrooms</S.FacilyTitle>
            </S.FacilitsCard>

            <S.FacilitsCard>
              <S.Facily source={SizeIcon} />
              <S.FacilyTitle>4000 sqft</S.FacilyTitle>
            </S.FacilitsCard>
          </S.HotelDetailsWrapper>

        </S.HotelDetailsDifferentials>

        <S.HotelDetailsDescription>
          <S.HotelDetailsSectionTitle>Description</S.HotelDetailsSectionTitle>

          <S.DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in cillum pariatur.
          </S.DescriptionText>
        </S.HotelDetailsDescription>

        <S.HotelDetailsFacilites>
          <S.HotelDetailsSectionTitle>Facilites</S.HotelDetailsSectionTitle>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <S.FacilitsCard>
                <S.Facily source={item.image} />
                <S.FacilyTitle>{item.name}</S.FacilyTitle>
              </S.FacilitsCard>
            )}
            numColumns={4}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          />
        </S.HotelDetailsFacilites>

        <S.HotelDetailsLocation>
          <S.HotelDetailsSectionTitle>Location</S.HotelDetailsSectionTitle>

          <S.HotelDetailsMap source={MapImage} />
        </S.HotelDetailsLocation>

        <S.HotelDetailsReview>
          <S.HotelReviewHeader>
            <S.HotelDetailsSectionTitle>Review</S.HotelDetailsSectionTitle>

            <S.HotelReviewLeft>
              <StarBold fill={theme.colors.secondary[500]} />

              <S.HotelNote>
                4.8
              </S.HotelNote>
              <S.HotelReviewsCount>
                (4.981) reviews
              </S.HotelReviewsCount>
            </S.HotelReviewLeft>


            <S.HotelsButton>
              <S.HotelsButtonText>See All</S.HotelsButtonText>
            </S.HotelsButton>
          </S.HotelReviewHeader>

          {comments.map(comment => (
            <S.ReviewCard>
              <S.ReviewCardHeader>
                <S.ReviewCardImage source={{ uri: comment.image }} />

                <S.ReviewCardInfo>
                  <S.ReviewCardName>{comment.name}</S.ReviewCardName>
                  <S.ReviewCardDate>{comment.date}</S.ReviewCardDate>
                </S.ReviewCardInfo>

                <S.ReviewCardButton>
                  <StarBold fill="#fff" width={RFValue(10)} height={RFValue(9.5)} />
                  <S.ReviewCardNumber>{comment.note}</S.ReviewCardNumber>
                </S.ReviewCardButton>
              </S.ReviewCardHeader>

              <S.ReviewCardComment>
                {comment.comment}
              </S.ReviewCardComment>
            </S.ReviewCard>
          ))}

          <S.ViewMoreButton>
            <S.ViewMoreButtonText>More</S.ViewMoreButtonText>
            <ArrowDown2Light stroke={theme.colors.primary[500]} />
          </S.ViewMoreButton>

        </S.HotelDetailsReview>
      </S.HotelDetailsContainer>

      <S.HotelPriceModal>
        <S.WrapperValue>
          <S.HotelValue>R$ 29</S.HotelValue>
          <S.HotelLorem>/ night</S.HotelLorem>
        </S.WrapperValue>
        <S.HotelModalButton>
          <S.HotelModalButtonText>Book Now!</S.HotelModalButtonText>
        </S.HotelModalButton>
      </S.HotelPriceModal>
    </S.WrapperHotelDetails>
  );
}