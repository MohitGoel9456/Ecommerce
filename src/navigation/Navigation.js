import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from './routes';
import Login from '../screens/LoginScreen'
import BooksListScreen from '../screens/BooksListScreen';
import { UserContext } from '../screens/ParentComponent';
import CheckoutScreen from '../screens/CheckoutScreen';
import ReadBook from '../screens/ReadBook';

const Navigation = () => {

  const Stack = createNativeStackNavigator();
  const data = useContext(UserContext);

  const authStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={RouteNames.login} component={Login} />
      </Stack.Navigator>
    )
  }

  const defaultStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={RouteNames.bookList} component={BooksListScreen} />
        <Stack.Screen name={RouteNames.checkout} component={CheckoutScreen} />
        <Stack.Screen name={RouteNames.readBook} component={ReadBook} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
    )
  }
  if (data.auth === undefined) {
    return null
  } else {
    return (
      <NavigationContainer>
        {!data.auth ?
          authStack() : defaultStack()
        }
      </NavigationContainer>
    );
  }
}

export default Navigation;