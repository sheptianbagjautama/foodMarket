import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

//...restProps -> ini adalah sisa props selain label & place holder akan dimasukan ke semua ke restprops ini
//contoh jika kita membuat value="" atau onpress di parent/yg menggunakan component ini maka itu dianggap sebagai sisa props

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
});
