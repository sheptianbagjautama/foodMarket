import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({text, color = '#FFC700', textColor = '#020202'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    borderRadius: 8,
    padding: 12,
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    textAlign: 'center',
  }),
});
