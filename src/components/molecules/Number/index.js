import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, type}) => {
  if (type == 'decimal') {
    return (
      <NumericFormat
        displayType="text"
        value={number}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
        renderText={value => <Text>{value}</Text>}
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
      renderText={value => <Text>{value}</Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
