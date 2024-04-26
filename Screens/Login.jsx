import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  handlePress,
  Button,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InputBox from '../Component/InputBox';
import { background_color, black_button, gray, primary_color, secondary_color } from '../utils/Colors';
import PrimaryButton from '../Component/PrimaryButton';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux';
import { setLogin } from '../Redux/authSlice';
import axios from 'axios';
import { active_url } from '../utils/Url';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const dispatch=useDispatch();

  const isValidEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  const handleForgotPassword = () => {
  };

  const signIn=()=>{
    if(email.trim() !== '' && password.trim() !== ''){
      console.log(isValidEmail(email))
      if(isValidEmail(email)===true){
        console.log("Email", email);
        console.log("Password", password);
        const trimmedEmail=email.toLowerCase();
        const user={
          email: trimmedEmail,
          password: password,
        }
        axios.post(`${active_url}/login-Customer`, user)
        .then(res=>{
          console.log("data",res.data)
          // Alert.alert(res.data)
          if(res.data.status==="ok"){
            setEmail('');
            setPassword('')
            console.log(res.data.data.token)
            dispatch(setLogin({user:user, accessToken:res.data.data.token}));
            navigation.dispatch(StackActions.replace('Home'));
          }else {
            Alert.alert("⚠️ Warning","Invalid Email or Password")
          }
        }).catch(error=>{
          console.log("Login error", error)
          if (error.response && error.response.status === 401 || error.response.status === 400) {
            Alert.alert("⚠️ Warning", "Invalid email or password");
          } else {
            Alert.alert("⚠️ Error", "Failed to connect to the server. Please try again later.");
          }
        })

        // navigation.navigate('Home');
      }else{
        Alert.alert("⚠️ Warning","Please Enter a Valid Email ID")
      }
    }else{
      Alert.alert("⚠️ Warning","Please Fill Details")
    }
  }

  const createAccount=()=>{
    navigation.navigate('User Registration')
  }

  const googleSignIn=()=>{
    navigation.navigate('Home')
  }

  const handleEmail=(value)=>{
    if(value.startsWith('')){
      setEmail(value.trim())
    }
  }

  const handlePassword=(value)=>{
    if(value.startsWith('')){
      setPassword(value)
    }
  }

  const img=require('../Assets/loginImg.png')
  const googleIcon=require('../Assets/search.png')

  return (
    
    <ScrollView style={styles.mainContainer} contentContainerStyle={{
      alignItems:"center",
    }}>
      <Image source={img} style={styles.img}/>
      <Text style={styles.mainHeader}>LOCAL VIBES</Text>
      <Text style={styles.label}>Email</Text>
      <InputBox placeholder='Enter Email' bordercolor={background_color} style={{
        width:wp(85),
        marginTop:5,
        marginBottom:20
      }}
      value={email}
      onChangeText={handleEmail}/>
      <Text style={styles.label}>Password</Text>
      <InputBox placeholder='Enter Password' bordercolor={background_color} style={{
        width:wp(85),
        marginTop:5,
        marginBottom:20
      }}
      value={password}
      onChangeText={handlePassword}
      secureTextEntry={true}/>
        <TouchableOpacity onPress={handleForgotPassword} style={{alignSelf:"flex-end", marginTop:-10, marginRight:10}}>
          <Text style={{color:secondary_color, fontSize:13}}>Forgot Password?</Text>
        </TouchableOpacity>

      <PrimaryButton text='Sign In' style={{marginTop:40, width:200}} onPress={signIn}/>
        <View style={{flexDirection:"row", alignItems:"center", gap:10, width:wp(90), justifyContent:"center"}}>
          <View style={styles.line}></View>
          <Text style={{color:black_button, marginVertical:10, fontSize:16}}>or</Text>
          <View style={styles.line}></View>
        </View>
      <View>
        <TouchableOpacity onPress={googleSignIn} style={{flexDirection:"row", gap:10, backgroundColor:background_color, padding:8, borderRadius:8, elevation:2, alignItems:"center"}}>
          <Text style={styles.text}>Sign in with Google</Text>
          <Image source={googleIcon} style={{width:20, height:20}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginTop:10, gap:10, alignItems:"center"}}>
        <Text style={styles.text}>New User?</Text>
        <TouchableOpacity onPress={createAccount}>
          <Text style={{color:secondary_color, fontSize:13}}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: primary_color,
    paddingHorizontal:20
  },
  mainHeader: {
    color: black_button,
    fontWeight: '500',
    fontSize: 30,
    marginBottom:30,
    fontFamily:"cursive",
    fontWeight:"900",
    marginTop:-10
  },
  label: {
    fontSize: 18,
    color: gray,
    fontFamily:"serif",
    alignSelf:"flex-start",
    marginLeft:10
  },
  text: {
    color: 'black',
  },
  img:{
    height:hp(40),
    width:wp(80),
    marginTop:-30
  },
  line:{
    height:1,
    backgroundColor:black_button,
    width:60
  }
});

export default Login;
