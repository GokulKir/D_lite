import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HHeader from '../../components/MainComponents/HCompoients/HHeader';
import UserSection from '../../components/MainComponents/HCompoients/UserSection';
import SearchSection from '../../components/MainComponents/HCompoients/SearchSection';
import ChatList from '../../components/MainComponents/HCompoients/ChatList';

export default function Home() {
  const userIcon = require('../../assets/user.png');
  const LogoIcon = require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} hidden />

      <HHeader LogoImg={LogoIcon} userImg={userIcon} />

      <UserSection />

      <SearchSection />

      <ChatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
