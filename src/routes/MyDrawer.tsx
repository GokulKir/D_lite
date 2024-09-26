import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawers from '../screens/Drawer/Drawers';
import Home from '../screens/Tabs/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <Drawers {...props} />} // Use custom drawer content
    initialRouteName="Home"
    drawerStyle={{
      backgroundColor: '#fff',
      width: 240,
    }}
    >
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
