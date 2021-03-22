import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const ButtonForm = ({title,presshandler}) => {


return(
    <TouchableOpacity
                    style={styles.button}
                    onPress={presshandler}>
                    <Text style={styles.buttonTitle}>{title}</Text>
                </TouchableOpacity>
)};
const styles=StyleSheet.create({
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width:200,
        alignSelf:'center',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
});export default ButtonForm;