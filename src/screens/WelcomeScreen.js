import React from 'react';
import {View,Text,StyleSheet,Br, ImageBackground,Image,TouchableOpacity} from 'react-native';


const WelcomeScreen = ({navigation}) => {

    const welcomehandler = () =>{
        
        return(navigation.navigate('Login'))
            
        
    }
    return(
        <ImageBackground source={require('../../assets/ci1BoK6.jpg')} style={styles.backgroundImage}>
        <Text style={styles.text}>Learn Python Programing </Text>
        <Image source={require('../../assets/logo.jpeg')}
        style={{height:200,
        width:200,
        borderRadius:70,
        margin:10,
        marginTop:50,
        alignSelf:'center'}}>
        </Image>
        <Text style={{fontSize:24,fontFamily:"sans-serif-light",alignSelf:'center',margin:10,}} >What is Python?</Text><Text style={{fontSize:20,fontFamily:"sans-serif-light",alignSelf:'stretch',margin:10,}}>
Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.<Text style={{fontSize:20,fontFamily:"sans-serif-light"}}>To get more basic knowlegde about python programming push the button!!!</Text>

</Text>
<TouchableOpacity onPress={welcomehandler}>
    <Text style={{fontSize:24,fontFamily: "sans-serif-light",padding:10,borderRadius:10,borderWidth:3,alignSelf:'center',marginTop:20,backgroundColor:'green'}}>Get Starts</Text>
</TouchableOpacity>
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width:'100%',
        height: '100%',
        backgroundColor:'transparent',
        
        
     },
     text:{
         fontSize:24,
         fontWeight:'bold',
         alignSelf:'center',
         backgroundColor:'white',
         marginTop:20,
         color:'black',
         padding:10,
         borderRadius:10,
         borderWidth:3,
        fontFamily: 'sans-serif-light'
     }
}) ;
export default WelcomeScreen;
