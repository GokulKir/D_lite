// actionTypes.ts
export const SET_SHOW_CODE = 'SET_SHOW_CODE';
export const SET_COUNTRY_STATE = 'SET_COUNTRY_STATE';
export const SET_LOADING_VALUE = 'SET_LOADING_VALUE';
export const MOBILE_VALUE = 'MOBILE_VALUE';

export const setShowCode = (showcode: boolean) => ({
  type: SET_SHOW_CODE,
  payload: showcode,
});

export const setCountryState = (countrystate: any) => ({
  type: SET_COUNTRY_STATE,
  payload: countrystate,
});

export const setLoadingValue = (loadingValue: boolean) => ({
  type: SET_LOADING_VALUE,
  payload: loadingValue,
});

export const setMobileState = (mobilestate: any) => ({
  type: MOBILE_VALUE,
  payload: mobilestate,
});
