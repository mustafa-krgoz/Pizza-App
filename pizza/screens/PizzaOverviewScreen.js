import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Pizzalar, CATEGORIES } from '../data/dummy-data';
import PizzaItem from '../components/PizzaItem';
import { useLayoutEffect } from 'react';

export default function PizzaOverviewScreen({route, navigation}) { // distraction işlemi
   
    const categoryId = route.params.categoryId
    const displayedPizzas = Pizzalar.filter((pizzaItem) => {
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
    
  function renderPizzaItem(itemData){
    console.log(itemData.item);
    const pizzaItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    }
    return <PizzaItem {...pizzaItemProps} />;
  }

  return (
    <View>
      <Text>PizzaOverviewScreen - {categoryId}</Text>
      <FlatList data={displayedPizzas}
      keyExtractor={(item)=>item.id}
      renderItem={renderPizzaItem}/>
    </View>
  );
}

const styles = StyleSheet.create({})