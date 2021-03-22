import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack' 
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';


const AppStack = createStackNavigator({
  Home:HomeScreen,
  Detail:DetailScreen

},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'',
    
  }
}
);
export default  createAppContainer(AppStack);
