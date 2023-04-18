import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStartOff, IcStartOn} from '../../../assets';
import Number from '../Number';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i < 5; i++) {
      if (i < number) {
        star.push(<IcStartOn key={i} />);
      } else {
        star.push(<IcStartOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStar()}</View>
      <Number number={number} type="decimal" style={styles.numberRating} />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
  numberRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginTop: 2,
  },
});
