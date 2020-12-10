import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
const HomeScreen = ({ navigation }) => {
    return (
      <ImageBackground source={require('../images/im3.jpg')} style={{width: '100%', height: '100%'}}>
  
        <View style={{
          flex: 4,
          flexDirection: 'column',
          justifyContent: 'center',
         
        }}>
        <View style={{width: '80%', height: '50%', justifyContent: 'space-around', margin:40 ,marginTop: 300}}>
  
  
        <Button 
        
        title="Consulter "
        color="#daa520"
        onPress={() => navigation.navigate('carte') }
       
     
     
    >
      
      </Button>
      <Button 
        
        title="Ajouter Annonce "
        color="#daa520"
        onPress={() => navigation.navigate('Etape1') }
       
     
     
    >
      
      </Button>
     
  </View>
  
  
        </View>
       
  
        
    </ImageBackground>
      
      
    );
  };

export default HomeScreen
