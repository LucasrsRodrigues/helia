import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowLeftLight, MoreCircleLight } from '../../assets/icons';

import * as S from './styles';

const images = [
  {
    id: 0,
    url: 'https://media.staticontent.com/media/pictures/7903a60f-ec25-440f-b9c5-b3f095235530/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 1,
    url: 'https://media.staticontent.com/media/pictures/e7325e86-86ca-49c1-a9a2-2ce432f18459/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 2,
    url: 'https://media.staticontent.com/media/pictures/1d9e151d-3b1d-4c65-b617-563b9daf5dda/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 3,
    url: 'https://media.staticontent.com/media/pictures/64add46e-b2e2-4c49-ab2c-b45da7676e86/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 4,
    url: 'https://media.staticontent.com/media/pictures/2a3f5483-b888-4a48-b429-03431b112a3b/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 5,
    url: 'https://media.staticontent.com/media/pictures/2fb8faa0-5d06-4845-be28-8e744ebe0f94/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 6,
    url: 'https://media.staticontent.com/media/pictures/d9beacbf-9694-476c-8878-a4d5e7067c65/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  },
  {
    id: 7,
    url: 'https://media.staticontent.com/media/pictures/a302dab0-9d7e-47d5-b76e-6c6b6258e01b/1120x614?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'
  }
]

export function GalleryPhotos() {
  const { goBack } = useNavigation();

  return (
    <S.GalleryPhotosContainer>
      <S.GalleryPhotosHeader>
        <S.GalleryPhotosButton onPress={goBack}>
          <ArrowLeftLight stroke="#000" width={RFValue(28)} height={RFValue(28)} />
        </S.GalleryPhotosButton>

        <S.GalleryPhotosTitle>
          Gallery Hotel Photos
        </S.GalleryPhotosTitle>

        <S.GalleryPhotosButton>
          <MoreCircleLight stroke="#000" width={RFValue(28)} height={RFValue(28)} />
        </S.GalleryPhotosButton>
      </S.GalleryPhotosHeader>

      <S.GalleryPhotosWrapper>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <S.Photo source={{ uri: item.url }} />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        />
      </S.GalleryPhotosWrapper>

    </S.GalleryPhotosContainer>
  );
}