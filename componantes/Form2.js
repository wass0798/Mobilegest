import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
const Form2 = ({ navigation }) => {
    return  (
     
  
  
      <View style={{ margin:40 ,marginTop: 400}}>
       <Text>Etape 2 </Text>
  
      <Button 
      
      title="NEXT"
      color="#daa520"
      onPress={() => navigation.navigate('Etape3') }
  >
    
    </Button>
    <Button 
      
      title="Back"
      color="#daa520"
      onPress={() => navigation.navigate('Etape1') }
  >
    
    </Button>
  </View>
  
        
  
      
    );
  };

export default Form2
