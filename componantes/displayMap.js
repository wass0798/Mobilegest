import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import ListeAnnonce from '../pages/listeAnnonce';
import Mesannonces from '../pages/mesannonces';
import Mesdemande from '../pages/mesdemande';
import Map from './Map';
const displayMap = ({ navigation }) => {
    return  (
     
  <>
      
     
   <Menu/>
     
      

 
        
 </> 
      
    );
  };
  const Drawer = createDrawerNavigator();
  const Menu = () => {
    return  (
  <Drawer.Navigator  drawerPosition='right' drawerStyle={{
     
      width: 240,
    }} >
        <Drawer.Screen name="Carte" component={Map} />
        <Drawer.Screen name="Liste des annonces" component={ListeAnnonce} />
     <Drawer.Screen name="Mes annonces" component={Mesannonces} />
     <Drawer.Screen name="Mes demandes" component={Mesdemande} />
   
       
      </Drawer.Navigator>
      
    );
    
  };
export default displayMap
