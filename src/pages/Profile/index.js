import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Sheptian Bagja Utama</Text>
        <Text style={styles.email}>sheptianbagjautama@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#F0F0F0',
    borderRadius: 90,
    padding: 24,
  },
});
