import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './stack.routes';
import TabRoutes from './tab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  )
}