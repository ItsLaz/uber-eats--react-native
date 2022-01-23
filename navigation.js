import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RestaurantDetail from './screens/RestaurantDetail';
import Home from './screens/Home';

const RootNavigation = () => {
    const Stack = createStackNavigator();

    const screenOptions = { headerShown: false };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="RestaurantDetail"
                    component={RestaurantDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
