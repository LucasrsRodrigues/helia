import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowLeftBold, ArrowLeftLight, MoreCircleLight } from '../../assets/icons';

import * as S from './styles';

export function Notifications() {
  return (
    <S.NotificationsContainer>
      <S.NotificationsHeader>
        <S.NotificationsButton>
          <ArrowLeftLight width={RFValue(28)} height={RFValue(28)} />
        </S.NotificationsButton>

        <S.NotificationsTitle>
          Notification
        </S.NotificationsTitle>

        <S.NotificationsButton>
          <MoreCircleLight width={RFValue(28)} height={RFValue(28)} />
        </S.NotificationsButton>
      </S.NotificationsHeader>

      <S.NotificationsContent>
        <S.NotificationDay>Today</S.NotificationDay>

        <S.NotificationCard>

        </S.NotificationCard>
      </S.NotificationsContent>
    </S.NotificationsContainer>
  );
}