import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    image:
      'https://techstartups.com/wp-content/uploads/2024/08/Telegram-founder-and-CEO-Pavel-Durov-arrested-at-French-airport-faces-20-years-in-prison.jpg',
    name: 'Pavel Durox',
  },
  {
    id: 2,
    image:
      'https://tycoonstorymedia.b-cdn.net/wp-content/uploads/2023/09/The-Most-Inspiring-Sucessful-Life-Story-of-Jan-Koum-Founder-of-WhatsApp-Tycoonstory.jpg',
    name: 'Jan Koum',
  },
  {
    id: 3,
    image:
      'https://i.pinimg.com/736x/9e/ba/c3/9ebac36a1487ae6e12bef68792bdb3e3.jpg',
    name: 'Don Lee',
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ',
    name: 'Justin Bieber',
  },
  {
    id: 5,
    image:
      'https://fortune.com/img-assets/wp-content/uploads/2017/02/gettyimages-163292239.jpg?w=1440&q=75',
    name: 'Mark Zucker',
  },
];

export default function UserSection() {
  const renderItem = ({item}) => {
    return (
      <Ripple
        rippleContainerBorderRadius={10}
        rippleOpacity={0.5}
        rippleDuration={400}
        rippleColor="#9c9c9e"
        style={styles.UserBox}>
        <View style={styles.BoxContainer}>
          <Image source={{uri: item.image}} style={styles.imageStyle} />
        </View>
        <View style={styles.BottomName}>
          <Text
            style={styles.UserTextStyle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.name}
          </Text>
        </View>
      </Ripple>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: moderateScale(115),
    paddingTop: moderateScale(3),
  },
  UserBox: {
    width: moderateScale(90),
    height: moderateScale(105),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(5),
  },
  BoxContainer: {
    width: '90%',
    height: moderateScale(80),
    borderRadius: moderateScale(5),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(5),
  },
  BottomName: {
    width: '100%',
    height: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  UserTextStyle: {
    color: '#cbcbce',
    fontWeight: '400',
    fontSize: moderateScale(13),
  },
});
