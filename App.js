import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

import Camera from './components/pages/Home/CameraComponent';
import Home from './components/pages/Home/Home';
import Images from './components/pages/Home/Images';
import Datas from './components/pages/Home/Datas';
import Generate from './components/pages/Home/Generate';
import DataInfos from './components/pages/Home/DataInfos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Images' component={Images} />
          <Stack.Screen name='Datas' component={Datas} />
          <Stack.Screen name='DataInfos' component={DataInfos} />
          <Stack.Screen name='Generate' component={Generate} />
          <Stack.Screen name='camera' component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
