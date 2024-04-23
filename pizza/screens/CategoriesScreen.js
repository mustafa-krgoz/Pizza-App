import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid';

export default function CategoriesScreen({navigation}) {
    
    function renderCategoryItem(itemData) {

        function pressHandler(){
          navigation.navigate('PizzaOverview');
        }

        console.log(itemData.item); // Obje içerisinde item var. Item indekslerine ulaşabiliyoruz.
        return (
        <CategoryGrid title={itemData.item.title} color={itemData.item.color} pressPizza={pressHandler} />
        ); // props olarak title ve color'ı yollamış olduk.
    }

  return (
    <FlatList  data={CATEGORIES}  keyExtractor={(item) => item.id} renderItem= // keyExtractor = Her bir elemanın birbirinden farklı olması
    {renderCategoryItem} /> // renderItem = Elamanları basmak

  )
}

const styles = StyleSheet.create({})