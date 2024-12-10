import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Routes from "./index.routes";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator 
        screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name="Home" component={Home} options={{
                title: 'Home',
                drawerActiveTintColor: 'white',
                drawerContentStyle:{
                    backgroundColor: '#484848',
                }
            }}/>
            <Drawer.Screen name="Login" component={Login} options={{
                title: 'Sair',
                drawerActiveTintColor: 'white',
                drawerContentStyle:{
                    backgroundColor: '#484848',
                }
            }}/>
            <Drawer.Screen name="Main Stack" component={Routes} options={{
                title: ''
            }} />
        </Drawer.Navigator>
    )
}