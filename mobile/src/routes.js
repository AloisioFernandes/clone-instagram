import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import logo from './assets/instagram.png'

import Feed from './pages/Feed'

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
              screenOptions={{
                  cardStyle: {
                      backgroundColor: "#fff"
                  },
                  headerStyle: {
                      backgroundColor: '#f5f5f5'
                  }
              }}
            >
                <AppStack.Screen name="Feed" component={Feed} options={{ title: <Image source={logo} />, headerTitleAlign: 'center' }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes