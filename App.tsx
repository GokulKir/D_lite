import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes/MyStack';
import {Provider} from 'react-redux';
import store from './src/screens/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <Provider store={store}>
          <MyStack />
        </Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
