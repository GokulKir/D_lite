import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    name: 'Developers World',
    time: '18:20',
    description: 'Why did you stop?',
    image:
      'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64dfc8162b86aaaa4236ed07_Header.webp',
    chatLength: '2',
  },
  {
    id: 2,
    name: 'React_Developer World',
    time: '18:20',
    description: 'Why did you stop?',
    image:
      'https://shamlatech.com/wp-content/uploads/2023/12/hire-native-react-01.webp',
    chatLength: '2',
  },
  {
    id: 3,
    name: 'Developers World',
    time: '18:20',
    description: 'Why did you stop?',
    image:
      'https://cdn.prod.website-files.com/63a58f5eea7e9c9396453f5b/653b90b7f8b5205c6d643bdf_pexels-sora-shimazaki-5926389.webp',
    chatLength: '2',
  },
];

export default function WorldList() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current; // Correct usage
  const fadeAnim = useRef(new Animated.Value(1)).current; // Correct usage

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate fetching data (you can replace this with an actual API call)
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({item}) => (
    <Ripple
      rippleOpacity={0.5}
      rippleDuration={500}
      rippleColor="#727273"
      style={styles.itemContainer}>
      <View style={styles.avatarBox}>
        <Image source={{uri: item.image}} style={styles.avatar} />
      </View>

      <View style={styles.ChatSecContainer}>
        <View style={styles.BoxFirst}>
          <View style={styles.TextBox}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.nameText}>
              {item.name}
            </Text>
          </View>

          <View style={styles.TextBox2}>
            <Text
              style={styles.descriptionText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.description}
            </Text>
          </View>
        </View>

        <View style={styles.BoxSec}>
          <View style={styles.TimeBox}>
            <Icon1 name="arrow-right" size={moderateScale(10)} color="#fff" />
          </View>

          <View style={styles.TimeBox}>
            {/* <View style={styles.LengthBox}>
                <Text style={styles.chatLengthText}>{item.chatLength}</Text>
              </View> */}
          </View>
        </View>
      </View>
    </Ripple>
  );

  // Function to hide the button with animation
  const hideButton = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Function to show the button with animation
  const showButton = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={() =>
          refreshing ? <ActivityIndicator size="large" color="orange" /> : null
        }
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            listener: event => {
              const currentOffset = event.nativeEvent.contentOffset.y;
              if (currentOffset > 0) {
                hideButton(); // Hide button when scrolling up
              } else {
                showButton(); // Show button when scrolling to top
              }
            },
            useNativeDriver: false,
          },
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: width - 5,
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  itemContainer: {
    flexDirection: 'row',
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    height: moderateScale(90),
    width: '100%',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(20),
  },
  avatarBox: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(20),
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: moderateScale(15),
    justifyContent: 'center',
    flex: 1,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(5),
  },
  nameText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#fff',
  },
  timeText: {
    fontSize: moderateScale(12),
    color: '#999',
  },
  descriptionText: {
    fontSize: moderateScale(13),
    color: '#FFA500',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  timeStyle: {
    fontSize: moderateScale(10),
    color: '#FFA500',
  },
  nameDesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(5),
    width: '80%',
  },
  chatLengthText: {
    fontSize: moderateScale(12),
    color: '#000',
    fontWeight: 'bold',
  },
  ChatSecContainer: {
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  BoxFirst: {
    width: '75%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: moderateScale(5),
  },
  BoxSec: {
    width: '15%',
    height: '100%',
  },
  TextBox: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
  },
  TextBox2: {
    width: '100%',
    height: '40%',
  },
  TimeBox: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LengthBox: {
    width: moderateScale(22),
    height: moderateScale(22),
    backgroundColor: 'orange',
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Floating button styles
  floatingButton: {
    position: 'absolute',
    bottom: moderateScale(20),
    right: moderateScale(20),
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  Ripplecontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
