import { createStackNavigator } from '@react-navigation/stack';
import { Bookmarks } from '../screens/Bookmarks';
import { DetailReview } from '../screens/DetailReview';
import { GalleryPhotos } from '../screens/GalleryPhotos';
import { HotelDetails } from '../screens/HotelDetails';
import { Notifications } from '../screens/Notifications';
import TabRoute from './tab.routes';

const { Navigator, Screen } = createStackNavigator();

function StackRoute() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }} >
      <Screen name="Dashboard" component={TabRoute} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Bookmarks" component={Bookmarks} />
      <Screen name="HotelDetails" component={HotelDetails} />
      <Screen name="GalleryPhotos" component={GalleryPhotos} />
      <Screen name="DetailReview" component={DetailReview} />
    </Navigator>
  );
}

export default StackRoute;