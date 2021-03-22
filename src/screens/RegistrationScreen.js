import React, { useState } from 'react'
import TextInputForm from '../components/TextInput';
import { Image, Text,StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonForm from '../components/button';
import { AuthContext } from '../stack/AuthProvider';


const RegistrationScreen = ({navigation}) => {
    
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Text style={{fontFamily:"sans-serif-light",flex: 1,borderRadius:10,fontSize:24,marginTop:15,margin:10,color:'white',backgroundColor:'black',alignSelf:'center',padding:10}}>Create Account</Text>
         <TextInputForm placeholder="Full Name" value={fullName} onChangeText={(text)=>setFullName(text)}/>
         <TextInputForm placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)} />
         <TextInputForm secure={true} placeholder="password" value={password} onChangeText={(text)=>setPassword(text)}/>
         <TextInputForm secure={true} placeholder="password" value={confirmPassword} onChangeText={(text)=>setConfirmPassword(text)}/>
         <ButtonForm title="Sign Up" presshandler={onRegisterPress}/>
         <View style={styles.footerView}>
         <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Login</Text></Text>
         </View>
        </KeyboardAwareScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
     container:{
         
         width:'100%',
         height:'100%'

     },
     footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'black'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
});
export default  RegistrationScreen;