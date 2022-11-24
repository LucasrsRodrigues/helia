import React, { Fragment } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowLeftBold, ArrowLeftLight, MoreCircleLight } from '../../assets/icons';

import SuccessSvg from '../../assets/notifications/success.svg';
import WalletSvg from '../../assets/notifications/wallet.svg';
import CancelSvg from '../../assets/notifications/cancel.svg';
import ValidationSvg from '../../assets/notifications/2step.svg';

import { notifications } from '../../server';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

function RenderIcon(type: string) {
  switch (type) {
    case "wallet":
      return <WalletSvg width={RFValue(83)} height={RFValue(80)} />;

    case "cancel":
      return <CancelSvg width={RFValue(83)} height={RFValue(80)} />;

    case "2step":
      return <ValidationSvg width={RFValue(83)} height={RFValue(80)} />;

    case "success":
      return <SuccessSvg width={RFValue(83)} height={RFValue(80)} />;

    default:
      break;
  }
}

export function Notifications() {
  const { goBack } = useNavigation();

  return (
    <S.NotificationsContainer>
      <S.NotificationsHeader>
        <S.NotificationsButton onPress={goBack}>
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
        {notifications.map(notification => (
          <Fragment>
            <S.NotificationDay>{notification.date}</S.NotificationDay>
            {notification.items.map(item => (
              <S.NotificationCard>
                {RenderIcon(item.type)}

                <S.NotificationWrapper>
                  <S.NotificationTitle>{item.title}</S.NotificationTitle>
                  <S.NotificationMessage>{item.message}</S.NotificationMessage>
                </S.NotificationWrapper>
              </S.NotificationCard>
            ))}
          </Fragment>
        ))}


      </S.NotificationsContent>
    </S.NotificationsContainer>
  );
}