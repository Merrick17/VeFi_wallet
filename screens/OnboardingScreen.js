import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {GlobalStyles} from '../styles/GlobalStyles';

import GreenBtn from '../components/GreenBtn';



const OnboardingScreen = ({navigation}) => {
  const [activeItem, setActiveItem] = useState(0);
  const items = [
    {
      img: require('../assets/img/credit_card.png'),
      text: `Everything is in \n one location`,
    },
    {
      img: require('../assets/img/tokens.png'),
      text: `All assets in \n one place`,
    },
    {
      img: require('../assets/img/credit_card.png'),
      text: `Quick & Easy \n Payments`,
    },
  ];
  const selectItem = () => {
    setInterval(() => {
      if (activeItem == 2) {
        setActiveItem(0);
      } else {
        setActiveItem(activeItem + 1);
      }
      console.log('ACTIVE ITEM', activeItem);
    }, 10000);
  };
  useEffect(() => {
    selectItem();
  }, []);
  const createWallet =()=>{
    navigation.navigate('Legal') ; 
  }
  return (
    <View style={GlobalStyles.screen}>
      <Image source={items[activeItem].img} style={styles.onboardImg} />
      <View style={styles.bottomCard}>
        <Text style={styles.title}> {items[activeItem].text}</Text>
        <View style={styles.dotList}>
          <View
            style={activeItem == 0 ? styles.dotItemActive : styles.dotItem}
          />
          <View
            style={activeItem == 1 ? styles.dotItemActive : styles.dotItem}
          />
          <View
            style={activeItem == 2 ? styles.dotItemActive : styles.dotItem}
          />
        </View>
        <TouchableOpacity style={styles.borderBtn}>
          <Text style={styles.label}>I already have a wallet </Text>
        </TouchableOpacity>
        <GreenBtn label={'Create a New Wallet'} onPress={createWallet}/>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  bottomCard: {
    height: '47%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#272636',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  onboardImg: {
    alignSelf: 'center',
    marginBottom: 280,
    top: 0,
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'center',
    padding: 20,
    fontFamily: 'GilroySemiBold',
  },
  dotList: {
    width: '50%',
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  dotItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: -5,
  },
  dotItemActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#31CBD1',
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    padding: 20,
    fontFamily: 'GilroyMedium',
    width: '100%',
  },
  borderBtn: {
    borderBottomColor: '#F69D69',
    borderBottomWidth: 2,
    width: '70%',
    alignSelf: 'center',
  },
 
});
