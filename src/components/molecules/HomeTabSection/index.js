import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';

import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_HOST} from '../../../config';
import {
  setNewTaste,
  setPopular,
  setRecommended,
} from '../../../redux/reducer/homeSlice';

//UNTUK MENGCUSTOM TABBAR
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 0.8,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

//MEMBUAT PAGE TAB
const NewTaste = () => {
  //Karena level nya komponent bukan page, maka kita harus menggunakan useNavigation()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);

  const getFoodDataByTypes = types => {
    axios
      .get(`${API_HOST.url}/food?types=${types}`)
      .then(res => {
        // console.log('res: ', res.data.data.data);
        if (types === 'new_food') {
          dispatch(setNewTaste(res.data.data.data));
        }
        if (types === 'popular') {
          dispatch(setPopular(res.data.data.data));
        }
        if (types === 'recommended') {
          dispatch(setRecommended(res.data.data.data));
        }
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    getFoodDataByTypes('new_food');
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {newTaste.map(item => {
          console.log('item', item);
          let picture = item.picturePath.replace(
            'http://localhost:8000',
            `${API_HOST.base_url}`,
          );

          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: picture}}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  //Karena level nya komponent bukan page, maka kita harus menggunakan useNavigation()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  const getFoodDataByTypes = types => {
    axios
      .get(`${API_HOST.url}/food?types=${types}`)
      .then(res => {
        // console.log('res: ', res.data.data.data);
        if (types === 'new_food') {
          dispatch(setNewTaste(res.data.data.data));
        }
        if (types === 'popular') {
          dispatch(setPopular(res.data.data.data));
        }
        if (types === 'recommended') {
          dispatch(setRecommended(res.data.data.data));
        }
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    getFoodDataByTypes('popular');
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {popular.map(item => {
          console.log('item', item);
          let picture = item.picturePath.replace(
            'http://localhost:8000',
            `${API_HOST.base_url}`,
          );

          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: picture}}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  //Karena level nya komponent bukan page, maka kita harus menggunakan useNavigation()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  const getFoodDataByTypes = types => {
    axios
      .get(`${API_HOST.url}/food?types=${types}`)
      .then(res => {
        // console.log('res: ', res.data.data.data);
        if (types === 'new_food') {
          dispatch(setNewTaste(res.data.data.data));
        }
        if (types === 'popular') {
          dispatch(setPopular(res.data.data.data));
        }
        if (types === 'recommended') {
          dispatch(setRecommended(res.data.data.data));
        }
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    getFoodDataByTypes('recommended');
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {recommended.map(item => {
          console.log('item', item);
          let picture = item.picturePath.replace(
            'http://localhost:8000',
            `${API_HOST.base_url}`,
          );

          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: picture}}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
//END MEMBUAT TAB PAGE

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
