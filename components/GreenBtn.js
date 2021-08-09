import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';
const FROM_COLOR = '#31CBD1';
const TO_COLOR = '#61E0A1';
const GreenBtn = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.greenBtn} onPress={onPress}>
      <Svg
        height="100%"
        width="100%"
        style={{...StyleSheet.absoluteFillObject, borderRadius: 30}}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" rx={30} />
      </Svg>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default GreenBtn;

const styles = StyleSheet.create({
    greenBtn: {
        width: 335,
        height: 72,
        //backgroundColor:'#31CBD1',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
      },
      btnText: {
        alignSelf: 'center',
        fontSize: 22,
        justifyContent: 'center',
        fontFamily: 'GilroyMedium',
      },
});
