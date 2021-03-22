import React, { useState } from 'react'
import TextInputForm from '../components/TextInput';
import { Image, Text, View,StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonForm from '../components/button';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        return(navigation.navigate('Registration'))
    };
    const onLoginPress = () => {
        return(navigation.navigate('Home'))
        }
    
 
    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
        
        <Image
                    style={styles.logo}
                    source={require('../../assets/logo.jpeg')}
                />
        
         <TextInputForm value={email} placeholder="Email" onChangeText={(text) => setEmail(text)}/>
         <TextInputForm Value={password} placeholder="password" onChangeText={(text) => setPassword(text)} secure={true}/>
         <ButtonForm title="log in" presshandler={onLoginPress}/>
         <View style={styles.footerView}>
         <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
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
    logo: {
        flex: 1,
        height: 200,
        width: 200,
        borderRadius:10,
        alignSelf: "center",
        margin: 30
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
export default LoginScreen;