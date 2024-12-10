import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import BottomRoutes from './bottom.routes';
import DrawerNavigator from './drawer.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false,
      }}
    >

      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
      <Stack.Screen name='DrawerRoutes' component={DrawerNavigator} /> */}
    </Stack.Navigator>
  );
}