import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreens';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meals Categories" component={CategoriesScreen} options={{title:'All Categories', headerStyle:{backgroundColor:'#da70d6'},headerTintColor:'white'}}/>
        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} options={{contentStyle: {backgroundColor: '#ffc0cb'}}}/>
        <Stack.Screen name="Meal Details" component={MealDetailScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container:{}});
