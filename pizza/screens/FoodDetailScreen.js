import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import React from 'react';
import { useLayoutEffect, useContext} from 'react';
import { Pizzalar } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { FontAwesome } from '@expo/vector-icons';
import { FavoritesContext } from '../store/favoritescontext';

export default function FoodDetailScreen({ route, navigation }) {
  const favoriteFoodContext=useContext(FavoritesContext);
  const foodId = route.params.foodId;
  const selectedFood = Pizzalar.find((food) => food.id === foodId);
  console.log(selectedFood);

  const foodIsFavorite=favoriteFoodContext.ids.includes
  (foodId);

  const pressHandler = () =>{
    console.log('Tıklandı!');
  };

  function changeFavorite () {
    if (foodIsFavorite){
      favoriteFoodContext.removeFavorite(foodId)
    }
    else {
      favoriteFoodContext.addFavorite(foodId)
    }
  }

  useLayoutEffect(() => {
    
      navigation.setOptions({
        headerRight:() => {
          return (
            <Pressable onPress={pressHandler} style={({pressed})=>(pressed ? styles.
            pressed : null)}>
              <FontAwesome 
              name={foodIsFavorite ? 'star' : 'star-o'} 
              size={24} 
              color="white" 
              onPress={changeFavorite}
              />
            </Pressable>
          );
        },
      });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingerdients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },

  image: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'red',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
    marginVertical: 5,
  },
  subTitle: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  }
});
