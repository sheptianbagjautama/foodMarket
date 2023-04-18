import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, type, style}) => {
  if (type == 'decimal') {
    return (
      <NumericFormat
        displayType="text"
        value={number}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
        renderText={value => <Text style={style}>{value}</Text>}
        sty
      />
    );
  }
  return (
    <NumericFormat
      thousandSeparator="."
      displayType="text"
      prefix="IDR "
      value={number}
      decimalSeparator=","
      renderText={value => <Text style={style}>{value}</Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
