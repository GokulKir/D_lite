import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Joined from './Joined';
import Request from './Request';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Req" component={Request} />
      <Tab.Screen name="Join" component={Joined} />
    </Tab.Navigator>
  );
}

export default MyTabs;
