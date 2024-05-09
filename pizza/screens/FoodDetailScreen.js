import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import { Pizzalar } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';

export default function FoodDetailScreen({route}) {
  const foodId = route.params.foodId;
  const selectedFood = Pizzalar.find((food)=>food.id === foodId);
  console.log(selectedFood);
  return (
    <ScrollView>
        <Image style ={styles.image} source={{uri:selectedFood.imageUrl}}/>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
            <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
        </View>
        <View>
            <View>
                <Text>
                    <Text>İçindekiler</Text>
                </Text>
            </View>
            <FoodIngredients data={selectedFood.ingerdients}/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '%100',
        height: 300,
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
      },
})
