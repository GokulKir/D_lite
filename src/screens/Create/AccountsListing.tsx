import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import LHeader from '../../components/MainComponents/LComponents/LHeader';
import CreateOptions from '../../components/MainComponents/LComponents/CreateOptions';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import AccountList from '../../components/MainComponents/LComponents/AccountList';
import OptionModal from '../../components/Modal/OptionModal';

export default function AccountsListing() {
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate fetching data
    setTimeout(() => {
      setRefreshing(false);
      // Here you would typically fetch new data
    }, 2000); // Simulate a 2 second loading time
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? '#000' : 'transparent'}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />
      <LHeader setVisible={setVisible} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#ffffff" // Set the color for the loading spinner
          />
        }>
        <CreateOptions />

        <View style={styles.SecBox}>
          <Text style={styles.TextStyle}>All contacts on d-lite</Text>
        </View>

        <AccountList />

        <OptionModal setVisible={setVisible} visible={visible} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  SecBox: {
    width: '90%',
    height: verticalScale(20),
    marginTop: moderateScale(15),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#afaeae',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: verticalScale(20), // Adding some padding at the bottom
  },
});
