import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import TermsBtn from '../components/TermsBtn';
import PrivacyBtn from '../components/PrivacyBtn';
import GreenBtn from '../components/GreenBtn';
const LegalScreen = ({navigation}) => {
  const acceptTerms = () => {
    navigation.navigate('recover');
  };
  return (
    <View style={GlobalStyles.screen}>
      <Icon name="arrowleft" style={styles.leftBtn} />
      <Text style={styles.title}>Legal</Text>
      <Text style={styles.subTitle}>
        Please review the VeFi Wallet Privacy Policy and Terms of Service
      </Text>
      <TermsBtn />
      <PrivacyBtn />
      <GreenBtn label="Accept" onPress={acceptTerms} />
    </View>
  );
};

export default LegalScreen;

const styles = StyleSheet.create({
  leftBtn: {
    fontSize: 32,
    color: '#FFF',
    alignSelf: 'flex-start',
    fontWeight: '100',
    position: 'absolute',
    top: 70,
    left: 15,
    marginBottom: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 56,
    color: '#FFF',
    fontFamily: 'Gilroy-Regular',
    marginBottom: 100,
    marginLeft: 20,
    marginTop: 70,
  },
  subTitle: {
    alignSelf: 'flex-start',
    fontSize: 17,
    color: '#FFF',
    fontFamily: 'Gilroy-Regular',
    marginBottom: 60,
    marginLeft: 20,
  },
});
