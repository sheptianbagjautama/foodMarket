import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_HOST} from '../../config';
import {setFood} from '../../redux/reducer/homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    getFoodData();
  }, []);

  const getFoodData = () => {
    axios
      .get(`${API_HOST.url}/food`)
      .then(res => {
        // console.log('res: ', res.data.data.data);
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
              return (
                <FoodCard
                  name={itemFood.name}
                  image={{uri: itemFood.picturePath}}
                  rating={itemFood.rate}
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
