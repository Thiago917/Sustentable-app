import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}