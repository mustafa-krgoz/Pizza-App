import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { FontAwesome } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favoritescontext';
import LoginScreen from './screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor: 'orange'},
      headerTintColor: 'white',
    }}>

     <Drawer.Screen 
      name="Login" 
      component={LoginScreen} 
      options={{
        title: 'Giriş',
        drawerIcon:()=>(
          <Ionicons name="person" size={24} color="black" />
        )
      }}
      />

      <Drawer.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{
        title: 'Kategoriler',
        drawerIcon:()=>(
          <FontAwesome name="list" size={24} color="black" />
        )
      }}
      />
     
      <Drawer.Screen 
      name="Favorites" 
      component={FavoritesScreen} 
      options={{
        title: 'Favoriler',
        drawerIcon:()=>(
          <FontAwesome name="star-o" size={24} color="black" />
        )
      }}
      />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <FavoritesContextProvider>
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
          headerShown: false,
        }} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen}  
        options={{
          title: "İçerik"
        }}/>
      </Stack.Navigator>
      </FavoritesContextProvider>
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
