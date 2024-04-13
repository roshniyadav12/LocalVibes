import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import Settings from '../Screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SearchAndExplore from '../Screens/SearchAndExplore';
import Cart from '../Screens/Cart';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { background_color, black_button, light_red, primary_color, secondary_color } from '../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import VendorSignUp from '../Screens/VendorSignUp';
import SignUp from '../Screens/SignUp';

const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();

const MainTab=()=>{
  return(
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle:{
        backgroundColor:primary_color,
        height:60,
        paddingBottom:5,
        paddingTop:8,
        paddingHorizontal:8,
        marginBottom:10,
        borderRadius:30,
        width:"90%",
        alignSelf:"center"
      },
      // tabBarActiveTintColor:light_red,
      // tabBarShowLabel:false,
      tabBarInactiveTintColor:black_button,
    }}>
      <Tab.Screen name='Home Screen' component={HomeScreen} options={{
        tabBarIcon:({ color, size }) => (<Entypo name="home" size={25} color={color} />),
        title:"Home"
      }}/>
      <Tab.Screen name='Search' component={SearchAndExplore} options={{
        tabBarIcon:({ color, size }) => (<Fontisto name="search" size={20} color={color} />),
      }}/>
      <Tab.Screen name='Cart' component={Cart} options={{
        tabBarIcon:({ color, size }) => (<Ionicons name="cart" size={28} color={color} />),
      }}/>
      <Tab.Screen name='Notification' component={Notification} options={{
        tabBarIcon:({ color, size }) => (<Feather name="bell" size={25} color={color} />),
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon:({ color, size }) => (<FontAwesome name="user" size={size} color={color} />),
      }}/>
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={MainTab}/>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name='Vendor Registration' component={VendorSignUp}/>
        <Stack.Screen name='User Registration' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
