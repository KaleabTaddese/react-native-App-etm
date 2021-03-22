import React ,{useState} from 'react';
import { SearchBar } from 'react-native-elements';
import { View,Text,StyleSheet,SafeAreaView, ScrollView, StatusBar,TouchableOpacity,} from 'react-native';
import ImageDetail from '../components/Imagelist';
export default function HomeScreen({navigation}){
    
    const [begginers,setBeg]= useState([
        {key:1,title:'python Basics',bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5',source:{uri: 'http://www.africau.edu/images/default/sample.pdf'}},
        {key:2,title:'python Basics',bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
        {key:3,title:'python Basics',bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
        {key:4,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
        {key:5,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
        {key:6,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
        {key:7,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
        {key:8,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
          
]);
const [intermediate,setInt]= useState([
    
    {key:1,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:2,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:3,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:4,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:5,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:6,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:7,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:8,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
      
]);
const [Advance,setAdv]= useState([
    {key:1,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:2,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:3,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:4,bpage:'100', Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:5,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:6,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:7,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
    {key:8,bpage:'100',Author:'Stephen Grider', image:require('../../assets/logo.jpeg'), price:'100',rate:'4.5'},
      
]);
const onpressDetail = () =>{
    return(
        navigation.navigate('Detail')
    )
};
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={{fontSize:18,alignSelf:'center',color:'green',backgroundColor:'black',borderRadius:20,margin:20}} > Python Books For Begginers</Text>
            <ImageDetail onpressDetail={onpressDetail} value={begginers}/>
            <Text style={{fontSize:18,alignSelf:'center',color:'green',backgroundColor:'black',borderRadius:20,margin:20}} > Python Books For Intermediate</Text>
            <ImageDetail onpressDetail={onpressDetail} value={intermediate}/>
            <Text style={{fontSize:18,alignSelf:'center',color:'green',backgroundColor:'black',borderRadius:20,margin:20}} > Python Books For Advanced</Text>
            <ImageDetail onpressDetail={onpressDetail} value={Advance}/>

            </ScrollView> 
            </SafeAreaView>  
    
    )
};HomeScreen.navigationOptions = ({navigation}) =>{
    return{
        headerRight: (
        <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{flexDirection:'row'}}>
            <Text style={{borderWidth:2,borderRadius:10,backgroundColor:'black',color:'white',fontSize:18,padding:10}}>Log Out</Text>
        </TouchableOpacity>
        )
    };
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
        marginVertical:20,
        borderRadius:10
      },
});
