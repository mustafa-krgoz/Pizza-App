import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PizzaOverviewScreen from './screens/PizzaOverviewScreen';

const Stack = createNativeStackNavigator();

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
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: "Kategoriler"
        }} />
        <Stack.Screen name="PizzaOverview" component={PizzaOverviewScreen} />
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
