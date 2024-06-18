import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import useCountryModal from '../../../hooks/useCountryModal';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

export default function LoadingModal() {
  const {showcode, countrystate, loadingValue} = useSelector(
    (state: any) => state.countryModal,
  ); // Ensure you're accessing state.countryModal
  return (
    <Modal
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      isVisible={loadingValue}>
      <BarIndicator color="#fff" size={moderateScale(50)} />
    </Modal>
  );
}

const styles = StyleSheet.create({});
