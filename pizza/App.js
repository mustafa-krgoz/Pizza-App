import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PizzaOverviewScreen from './screens/PizzaOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'orange'},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator}
        options={{
          title: "Kategoriler"
        }} />
        <Stack.Screen name="PizzaOverview" component={PizzaOverviewScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen}  
        options={{
          title: "İçerik"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
