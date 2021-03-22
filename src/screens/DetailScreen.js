import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

import * as OpenAnything from 'react-native-openanything';

const DetailScreen = () =>{
  
  return(
    <View style={styles.container}>
    <Button title="READ THE DOCUMNET"
    onPress={()=> OpenAnything.Pdf('https://www.tutorialspoint.com/react_native/react_native_tutorial.pdf')}/>
    </View>
  )
};
export default DetailScreen;
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center'
}
});
