import React from 'react';
import FeatureStackNavigator
import ThirdStack from '../components/ThirdStack';
import MyOrderScreen from '../Drawer/2MyOrderScreen';

const FeatureStack = createStackNavigator();

const FeatureStackNavigator = () => {
  return (
    <FeatureStack.Navigator>
      <FeatureStack.Screen name="ThirdStack" component={ThirdStack} />
      <FeatureStack.Screen name="My Order" component={MyOrderScreen} />
    </FeatureStack.Navigator>
  );
};

export default FeatureStackNavigator;
