import React from 'react';
import { Text,StyleSheet,FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import ButtonForm from './button';
export default function ImageDetail({value,onpressDetail}){
  
    return(
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(value)=> value.key }
        data={value} 
        renderItem={({ item }) =>{
            //element = {item:{name:'tesfa'} index:0}
         return <Card style={{width:200}}> 
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider/>
            <Card.Image source={item.image}
                      style={styles.imageStyle} ></Card.Image>
            <Text style={styles.text}>Author Name:- {item.Author}</Text>
            <Text style={styles.text}>Page Number:{item.bpage}</Text>
            <Text style={styles.text}>Price - {item.price}</Text>
            <Text style={{marginLeft:10,
    fontSize:14,
    color:'blue',marginBottom:10}}>Rating Reviews:-{item.rate}</Text>
            <ButtonForm title="WANT TO READ" presshandler={onpressDetail}/>
      </Card>}}/>
            
    )
};
const styles = StyleSheet.create({
imageStyle:{
    width:220,
    height:150,
    marginLeft:10,
    marginBottom:10,
    marginRight:15,
    marginTop:10
},
text:{
    marginLeft:10,
    fontSize:14,
    color:'blue',
  


}
});