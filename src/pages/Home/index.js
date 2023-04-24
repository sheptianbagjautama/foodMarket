import axios from 'axios';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {API_HOST} from '../../config';
import {setFood} from '../../redux/reducer/homeSlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    getFoodData();
  }, []);

  const getFoodData = () => {
    axios
      .get(`${API_HOST.url}/food`)
      .then(res => {
        dispatch(setFood(res.data.data.data));
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            {food.map(itemFood => {
              let picture = itemFood.picturePath.replace(
                'http://127.0.0.1:8000',
                `${API_HOST.base_url}`,
              );
              return (
                <FoodCard
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{uri: picture}}
                  rating={itemFood.rate}
                  onPress={() => navigation.navigate('FoodDetail', itemFood)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
