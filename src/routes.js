import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()
import Main from './pages/main'
import Setup from './pages/setup'
import List from './pages/list'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="Setup" component={Setup} />
                <AppStack.Screen name="List" component={List} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

