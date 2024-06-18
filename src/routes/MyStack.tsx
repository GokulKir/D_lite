import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Intro/Splash';
import Mobile from '../screens/Auth/Mobile';
import OtpFeald from '../screens/Auth/OtpFeald';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mobile"
        component={Mobile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Otp"
        component={OtpFeald}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
