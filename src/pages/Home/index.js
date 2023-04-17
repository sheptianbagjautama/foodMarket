import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_HOST} from '../../config';
import {
  setFood,
  setNewTaste,
  setPopular,
  setRecommended,
} from '../../redux/reducer/homeSlice';

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

  // const getFoodDataByTypes = types => {
  //   axios
  //     .get(`${API_HOST.url}/food?types=${types}`)
  //     .then(res => {
  //       // console.log('res: ', res.data.data.data);
  //       if (types === 'new_taste') {
  //         dispatch(setNewTaste(res.data.data.data));
  //       }
  //       if (types === 'popular') {
  //         dispatch(setPopular(res.data.data.data));
  //       }
  //       if (types === 'recommended') {
  //         dispatch(setRecommended(res.data.data.data));
  //       }
  //     })
  //     .catch(err => {
  //       console.log('err: ', err);
  //     });
  // };

  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            {food.map(itemFood => {
              let picture = itemFood.picturePath.replace(
                'http://localhost:8000',
                `${API_HOST.base_url}`,
              );
              return (
                <FoodCard
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{uri: picture}}
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
