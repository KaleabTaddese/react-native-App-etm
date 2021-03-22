import React from 'react'
import {TextInput,StyleSheet } from 'react-native'



const TextInputForm = ({value,placeholder,onChangeText,secure}) => {


    
    return (
        
                
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={secure}
                    icon-Type="user"
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
        
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    title: {

    },
    
    input: {
        height: 48,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
});export default TextInputForm;