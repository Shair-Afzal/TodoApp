import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from './utils';

const Header = ({ 
  leftTitle = 'Left',
  centerTitle = 'Center',
  rightTitle = 'Right',
  leftImage = require('../assets/left-icon.png'),
  rightImage = require('../assets/right-icon.png')
}) => {
  return (
    <View style={[styles.header, globalStyles.flexRow, globalStyles.flexBetween]}>
      <View style={[globalStyles.flexRow, globalStyles.flexCenter]}>
        <Image source={leftImage} style={globalStyles.headerImage} />
        <Text style={[globalStyles.headerTitle, { marginLeft: 10 }]}>{leftTitle}</Text>
      </View>

      <Text style={[globalStyles.headerTitle, styles.centerTitle]}>{centerTitle}</Text>

      <View style={[globalStyles.flexRow, globalStyles.flexCenter]}>
        <Text style={[globalStyles.headerTitle, { marginRight: 10 }]}>{rightTitle}</Text>
        <Image source={rightImage} style={globalStyles.headerImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  centerTitle: {
    fontSize: 18,
  },
});

export default Header; 