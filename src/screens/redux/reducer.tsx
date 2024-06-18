// reducers.ts
import {combineReducers} from 'redux';
import {
  SET_SHOW_CODE,
  SET_COUNTRY_STATE,
  SET_LOADING_VALUE,
  MOBILE_VALUE,
} from './action';

interface CountryModalState {
  showcode: boolean;
  countrystate: any; // Replace 'any' with the actual type of countrystate
  loadingValue: boolean;
  mobilestate: any;
}

const initialState: CountryModalState = {
  showcode: false,
  countrystate: null,
  loadingValue: false,
  mobilestate: null,
};

const countryModalReducer = (
  state = initialState,
  action: any,
): CountryModalState => {
  switch (action.type) {
    case SET_SHOW_CODE:
      return {
        ...state,
        showcode: action.payload,
      };
    case SET_COUNTRY_STATE:
      return {
        ...state,
        countrystate: action.payload,
      };
    case SET_LOADING_VALUE:
      return {
        ...state,
        loadingValue: action.payload,
      };

    case MOBILE_VALUE:
      return {
        ...state,
        mobilestate: action.payload,
      };
    default:
      return state;
  }
};

export default countryModalReducer;
