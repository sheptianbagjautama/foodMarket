import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';

import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

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
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  //Karena level nya komponent bukan page, maka kita harus menggunakan useNavigation()
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price={'2.000.000'}
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
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
