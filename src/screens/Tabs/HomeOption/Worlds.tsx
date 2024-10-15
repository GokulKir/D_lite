import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WHeader from '../../../components/MainComponents/WComponents/WHeader';
import MyTabs from '../TopTabs/WorldTop';
import WorldTabs from '../../../components/MainComponents/WComponents/WorldTabs';

export default function Worlds() {
  return (
    <View style={styles.container}>
      <WHeader />

      <WorldTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
