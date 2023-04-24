import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../utils';
import axios from 'axios';
import {API_HOST} from '../../config';
import {setOrders} from '../../redux/reducer/orderSlice';

const Order = () => {
  const [isEmpty] = useState(false);
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    getData('token').then(resToken => {
      axios
        .get(`${API_HOST.url}/transaction`, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(res => {
          console.log('get orders: ', res.data);
          dispatch(setOrders(res.data.data.data));
          console.log('BAMBANG ORDERS');
          console.log('====================================');
          console.log(JSON.stringify(orders));
        })
        .catch(err => {
          console.log('err get orders: ', err);
        });
    });
  };

  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
