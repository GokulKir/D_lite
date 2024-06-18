import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes/MyStack';
import {Provider} from 'react-redux';
import store from './src/screens/redux/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
