import { createStackNavigator } from '@react-navigation/stack';
import ThirdStack from '../components/ThirdStack';
import MyOrderScreen from '../Drawer/2MyOrderScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ThirdStack" component={ThirdStack} />
    <Stack.Screen name="My Order" component={MyOrderScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
