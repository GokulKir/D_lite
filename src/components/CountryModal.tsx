import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import {SvgUri} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCountryState,
  setLoadingValue,
  setShowCode,
} from '../screens/redux/action';

const {width} = Dimensions.get('window');

export default function CountryModal() {
  const {showcode, countrystate, loadingValue} = useSelector(
    (state: any) => state.countryModal,
  ); // Ensure you're accessing state.countryModal

  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCountrySelect = (country: any) => {
    dispatch(setCountryState(country?.value))
    dispatch(setShowCode(!showcode));
    console.log(country);
  };

  const renderCountryItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleCountrySelect(item)}
      style={styles.countryItem}>
      <View style={styles.flagContainer}>
        <SvgUri width={30} height={moderateScale(15)} uri={item.flag} />
      </View>
      <View style={styles.codeContainer}>
        <Text style={styles.countryCode}>{item.value}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.countryName}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  const fetchCountries = () => {
    setLoading(true);
    setError(null);

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(
          response.data.map(country => ({
            label: country.name.common,
            value: `${country.idd?.root || ''}${
              country.idd?.suffixes ? country.idd.suffixes[0] : ''
            }`,
            flag: country.flags?.svg || country.flags?.png,
          })),
        );
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setError('Error loading countries');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <Modal
      onBackdropPress={() => dispatch(setShowCode(!showcode))}
      isVisible={showcode}>
      <View style={styles.modalContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="Search country"
            placeholderTextColor={'#fff'}
            style={styles.searchInput}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity onPress={fetchCountries}>
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={filteredCountries}
            renderItem={renderCountryItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.countryList}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: 'center',
    width: '90%',
    height: moderateScale(300),
    backgroundColor: '#1d1d1c',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  searchContainer: {
    width: '100%',
    height: moderateScale(40),
    backgroundColor: '#1d1d1c',
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(1),
    borderColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    elevation: moderateScale(2),
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  searchInput: {
    width: '100%',
    height: '100%',
    color: '#fff',
  },
  countryItem: {
    width: '95%',
    height: moderateScale(45),
    margin: moderateScale(1),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: moderateScale(5),
    backgroundColor: '#1d1d1c',
  },
  flagContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCode: {
    color: '#454B60',
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  nameContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  countryName: {
    color: '#545F71',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  retryText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
  countryList: {
    marginTop: moderateScale(10),
  },
});
