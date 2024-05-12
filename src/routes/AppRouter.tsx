import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppRouterList} from '../models/types/AppRouter';
import HomeScreen from '../screens/Home';
import MovieDetailsScreen from '../screens/MovieDetails';

const Stack = createNativeStackNavigator<AppRouterList>();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Movies App'}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{
            title: 'Movie details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
