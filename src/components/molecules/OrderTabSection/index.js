import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {FoodDummy1, FoodDummy3, FoodDummy4} from '../../../assets';
import {setInProgress, setPastOrders} from '../../../redux/reducer/orderSlice';
import {getData} from '../../../utils';
import ItemListFood from '../ItemListFood';
import axios from 'axios';
import {API_HOST} from '../../../config';

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
const InProgress = () => {
  //Karena level nya komponent bukan page, maka kita harus menggunakan useNavigation()
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    getInProgress();
  }, []);

  const getInProgress = () => {
    getData('token').then(resToken => {
      axios
        .all([
          axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
        ])
        .then(
          axios.spread((res1, res2, res3) => {
            console.log('get in progress 1', res1);
            console.log('get in progress 2', res2);
            console.log('get in progress 3', res3);
            const pending = res1.data.data.data;
            const success = res2.data.data.data;
            const onDelivery = res3.data.data.data;
            dispatch(setInProgress([...pending, ...success, ...onDelivery]));
          }),
        )
        .catch(err => {
          console.log('err get in progress: ', err);
        });
    });
  };

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {inProgress.map(order => {
          let picture = order.food.picturePath.replace(
            'http://127.0.0.1:8000',
            `${API_HOST.base_url}`,
          );

          return (
            <ItemListFood
              key={order.id}
              image={{uri: picture}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="in-progress"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  //Karena level nya komponent bukan page, maka kita harus menggunakan useNavigation()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    getPastOrders();
  }, []);

  const getPastOrders = () => {
    getData('token').then(resToken => {
      axios
        .all([
          axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
        ])

        .then(
          axios.spread((res1, res2) => {
            const canceled = res1.data.data.data;
            const delivered = res2.data.data.data;
            dispatch(setPastOrders([...canceled, ...delivered]));
          }),
        )
        .catch(err => {
          console.log('err get in progress: ', err);
        });
    });
  };
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {pastOrders.map(order => {
          let picture = order.food.picturePath.replace(
            'http://127.0.0.1:8000',
            `${API_HOST.base_url}`,
          );
          return (
            <ItemListFood
              key={order.id}
              image={{uri: picture}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="past-orders"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
              date={order.created_at}
              status={order.status}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
//END MEMBUAT TAB PAGE

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
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

export default OrderTabSection;

const styles = StyleSheet.create({});
