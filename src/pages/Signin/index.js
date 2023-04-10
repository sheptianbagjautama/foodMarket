import axios from 'axios';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {setLoading} from '../../redux/reducer/globalSlice';
import {getData, storeData, useForm} from '../../utils';

const API_HOST = {
  url: 'http://e02c-2001-448a-304a-1613-bde3-8305-ec50-b8b0.ngrok-free.app/api',
};

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLoading(true));
    axios
      .post(`${API_HOST.url}/login`, form)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        dispatch(setLoading(false));
        storeData('token', {value: token});
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.data?.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" color="#FFC700" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
