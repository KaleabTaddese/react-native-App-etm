import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack' 
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';




const AuthStack = createStackNavigator({
  Welcome:WelcomeScreen,
  Login:LoginScreen,
  Registration:RegistrationScreen,

},{
  initialRouteName:'Welcome',
  defaultNavigationOptions:{
    title:'',
    
  }
}
);
export default  createAppContainer(AuthStack );
