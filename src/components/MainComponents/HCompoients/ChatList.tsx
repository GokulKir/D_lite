import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';

const {height, width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    name: 'Theresa Webb',
    time: '18:20',
    description: 'Why did you stop?',
    image:
      'https://themoderndirectory.com/wp-content/uploads/2023/01/web-29-The-Modern-Directory_r2_095A6057.jpg',
    chatLength: '2',
  },
  {
    id: 2,
    name: 'Calvin Flores',
    time: '16:35',
    description: "He didn't come to my house!",
    image:
      'https://i.pinimg.com/200x/e7/85/f1/e785f16502696572b418d6b4000fda2c.jpg',
    chatLength: '3',
  },
  {
    id: 3,
    name: 'Gregory Bell',
    time: '15:17',
    description: 'When are you bringing this?',
    image:
      'https://i1.au.reastatic.net/400x400,gravity=north/f0827f563bda94ca111d0ced04334ceda1cecc4863200f76b83cc85e561bfacb/main.jpg',
    chatLength: '1',
  },
  {
    id: 4,
    name: 'Soham Henry',
    time: '14:50',
    description: "No, I'm just here",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgcdeymDClxjZrXCW6LDUwzZJXeZOU-_232Rq7PeN2gK2fLS8usRHFYcTyjew_sPCqc4&usqp=CAU',
    chatLength: '2',
  },
  {
    id: 5,
    name: 'Mother ❤️',
    time: '08:30',
    description: 'Please call me back',
    image:
      'https://t3.ftcdn.net/jpg/01/33/67/94/360_F_133679430_pdM6J7y5CsvPRqqt7bcKau2QkbOP51Wl.jpg',
    chatLength: '10',
  },

  {
    id: 6,
    name: 'Wife ❤️',
    time: '08:30',
    description: 'Please call me back',
    image:
      'https://t3.ftcdn.net/jpg/01/33/67/94/360_F_133679430_pdM6J7y5CsvPRqqt7bcKau2QkbOP51Wl.jpg',
    chatLength: '5',
  },
];

export default function ChatList() {
  const [refreshing, setRefreshing] = useState(false);

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
            <Text style={styles.timeStyle}>{item.time}</Text>
          </View>

          <View style={styles.TimeBox}>
            <View style={styles.LengthBox}>
              <Text style={styles.chatLengthText}>{item.chatLength}</Text>
            </View>
          </View>
        </View>
      </View>
    </Ripple>
  );

  return (
    <FlatList
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
    />
  );
}

const styles = StyleSheet.create({
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
});
