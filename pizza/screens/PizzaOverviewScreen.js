import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PizzaOverviewScreen({route}) { // distraction işlemi
  const categoryId = route.params.categoryId
  return (
    <View>
      <Text>PizzaOverviewScreen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})