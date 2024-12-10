import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DeleteProfile from './pages/DeleteProfile';

function StackNav() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

function DrawerNav() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={StackNav} 
        options={{
          headerShown: false,
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#484848',
            width: 300,
          },
        }} 
      />
      <Drawer.Screen name="Profile" component={Profile} options={{
        title: 'Minha Conta',
        headerTintColor: '#fff',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        headerStyle:{
        backgroundColor: '#1c1b1b'
        },
        drawerStyle: {
        backgroundColor: '#484848',
        width: 300,
        },    
         
         }} />
      <Drawer.Screen name="Login" component={Login} options={{
        title: 'Sair',
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#484848',
          width: 300,
        }
      
      }}/>
      <Drawer.Screen name="DeleteProfile" component={DeleteProfile} options={{
        title: 'Excluir conta',
        headerTintColor: '#fff',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        headerStyle:{
        backgroundColor: '#1c1b1b'
        },
        drawerStyle: {
        backgroundColor: '#484848',
        width: 300,
        },    
      
      }}/>
      
    </Drawer.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationIndependentTree>

    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <DrawerNav />
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
