import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Splash from '../screens/Intro/Splash';
import Mobile from '../screens/Auth/Mobile';
import OtpFeald from '../screens/Auth/OtpFeald';
import Home from '../screens/Tabs/Home';
import MyDrawer from './MyDrawer';
import AccountsListing from '../screens/Create/AccountsListing';

// Home Options //
import Calls from '../screens/Tabs/HomeOption/Calls';
import Worlds from '../screens/Tabs/HomeOption/Worlds';
import Shorts from '../screens/Tabs/HomeOption/Shorts';
import MyTabs from '../screens/Tabs/TopTabs/WorldTop';
// Home Options //

// Creation Pages //
import CreateWorld from '../screens/Create/CreateWorld';
import WorldDetailsType from '../screens/Create/WorldDetailsType';
import InviteWorld from '../screens/Create/InviteWorld';
import DesTyping from '../screens/Create/DesTyping';
// Creation Pages //

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mobile"
        component={Mobile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Otp"
        component={OtpFeald}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Drawers"
        component={MyDrawer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="AccountsListing"
        component={AccountsListing}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Calls"
        component={Calls}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Worlds"
        component={Worlds}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Shorts"
        component={Shorts}
      />

      <Stack.Screen
        name="Create"
        component={CreateWorld}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
      />

      <Stack.Screen
        name="TypeDetail"
        component={WorldDetailsType}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="InviteWorld"
        component={InviteWorld}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
      />

      <Stack.Screen
        name="Typing"
        component={DesTyping}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}
