import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm, showMessage} from '../../utils';
import {setLoading} from '../../redux/reducer/globalSlice';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };

    console.log('data Register : ', data);

    dispatch(setLoading(true));

    console.log('photoReducer', photoReducer);

    axios
      .post(`http://eeb1-125-164-19-54.ngrok-free.app/api/register`, data)
      .then(res => {
        console.log('data success', res.data);

        console.log('photoReducer', photoReducer);

        console.log('imageForm', photoReducer);

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          axios
            .post(
              `http://eeb1-125-164-19-54.ngrok-free.app/api/user/photo`,
              photoForUpload,
              {
                headers: {
                  Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                  // Authorization: `Bearer 28|CsBRylEA0ugV91NNqxG5d1puCcS8IT7pjfNTaMLC`,
                  'Content-Type': 'multipart/form-data',
                },
              },
            )
            .then(resUpload => {
              console.log('success upload: ', resUpload);
              dispatch(setLoading(false));
            })
            .catch(err => {
              console.log('err', err);
              showMessage('Upload photo tidak berhasil');
              dispatch(setLoading(false));
            });
        }

        dispatch(setLoading(false));
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('sign up error: ', err.response.data.message);
        showMessage(err?.response?.data?.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Sign Up Address"
          subTitle="Make sure it’s valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" color="#FFC700" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
