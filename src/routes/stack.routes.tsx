import { createStackNavigator } from '@react-navigation/stack';
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
    </Navigator>
  );
}

export default StackRoute;