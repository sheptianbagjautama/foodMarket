import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import {useEffect} from 'react';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(
    () => {
      setTimeout(() => {
        getData('token').then(res => {
          console.log('token: ', res);
          if (res) {
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          } else {
            navigation.replace('SignIn');
          }
        });
      }, 2000);
    },
    //diberikan array kosong supaya tidak di render terus menerus
    [],
  );
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
