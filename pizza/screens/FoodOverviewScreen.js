
import { Pizzalar, CATEGORIES } from '../data/dummy-data';
import FoodItem from '../components/FoodItem';
import { useLayoutEffect } from 'react';
import FoodList from '../components/FoodList';
import { StyleSheet } from 'react-native';

export default function FoodOverviewScreen({route, navigation}) { // distraction işlemi
   
    const categoryId = route.params.categoryId
    const displayedFoods = Pizzalar.filter((pizzaItem) => {
       return pizzaItem.categoryIds.indexOf(categoryId) >= 0; 
    })

  useLayoutEffect(()=>{
      const categoryTitle=CATEGORIES.find((category)=> 
        category.id === categoryId).title

        navigation.setOptions({
          title:categoryTitle,
    });
  }, [navigation, categoryId])
    
    //console.log(displayedPizzas);
    
  return <FoodList items={displayedFoods}/>;
    
}

const styles = StyleSheet.create({});