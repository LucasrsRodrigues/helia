import { createStackNavigator } from '@react-navigation/stack';
import { Bookmarks } from '../screens/Bookmarks';
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
    </Navigator>
  );
}

export default StackRoute;