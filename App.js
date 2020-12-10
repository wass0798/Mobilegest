
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import displayMap from './componantes/displayMap';
import HomeScreen from './componantes/HomeScreen';
import Form1 from './componantes/Form1';
import Form2 from './componantes/Form2';
import Form3 from './componantes/Form3';
import envoyer from './componantes/envoyer';
import TabsAnnoces from './pages/annonces';
import Demande  from './componantes/Demande'
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='float' >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="annonce" component={TabsAnnoces} />
        <Stack.Screen name="Etape1" component={Form1} />
        <Stack.Screen name="Etape2" component={Form2} />
        <Stack.Screen name="Etape3" component={Form3} />
        <Stack.Screen name="envoyer" component={envoyer} />
        <Stack.Screen name="demande" component={Demande} />
        <Stack.Screen name="carte" component={displayMap} />
    
   
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default class App extends React.Component {
  render(){

  return (
      <MyStack/>
     )
  }
}

