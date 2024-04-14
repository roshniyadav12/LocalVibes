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
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InputBox from '../Component/InputBox';
import { background_color, black_button, gray, primary_color, secondary_color } from '../utils/Colors';
import PrimaryButton from '../Component/PrimaryButton';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { StackActions } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [confrimPass, setConfirmPass]=useState('')

  const isValidEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  const signUp=()=>{
    if(email.trim() !== '' && password.trim() !== '' && confrimPass.trim()!==''){
      console.log(isValidEmail(email))
      if(isValidEmail(email)===true){
        console.log("Email", email);
        console.log("Password", password);
        console.log("Confirm Password", confrimPass)
        setEmail('');
        setPassword('')
        setConfirmPass('')
        // navigation.navigate('Home');
        navigation.dispatch(StackActions.replace('Home'));
      }else{
        Alert.alert("⚠️ Warning","Please Enter a Valid Email ID")
      }
    }else{
      Alert.alert("⚠️ Warning","Please Fill Details")
    }
  }

  const signIn=()=>{
    navigation.navigate('Login')
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

  const handleConfirmPass=(value)=>{
    if(value.startsWith('')){
      setConfirmPass(value)
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
      <InputBox placeholder='Enter Your Email' bordercolor={background_color} style={{
        width:wp(85),
        marginTop:8,
        marginBottom:20
      }}
      value={email}
      onChangeText={handleEmail}/>
      <Text style={styles.label}>Create Password</Text>
      <InputBox placeholder='Enter Password' bordercolor={background_color} style={{
        width:wp(85),
        marginTop:8,
        marginBottom:20
      }}
      value={password}
      onChangeText={handlePassword}
      secureTextEntry={true}/>
      <Text style={styles.label}>Confirm Password</Text>
      <InputBox placeholder='Confirm Password' bordercolor={background_color} style={{
        width:wp(85),
        marginTop:8,
        marginBottom:20
      }}
      value={confrimPass}
      onChangeText={handleConfirmPass}
      secureTextEntry={true}/>

      <PrimaryButton text='Sign Up' style={{marginTop:20, width:200}} onPress={signUp}/>
        <View style={{flexDirection:"row", alignItems:"center", gap:10, width:wp(90), justifyContent:"center"}}>
          <View style={styles.line}></View>
          <Text style={{color:black_button, marginVertical:10, fontSize:16}}>or</Text>
          <View style={styles.line}></View>
        </View>
      <View>
        <TouchableOpacity onPress={googleSignIn} style={{flexDirection:"row", gap:10, backgroundColor:background_color, padding:8, borderRadius:8, elevation:2, alignItems:"center"}}>
          <Text style={styles.text}>Sign up with Google</Text>
          <Image source={googleIcon} style={{width:20, height:20}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginTop:10, gap:10, alignItems:"center", marginBottom:30}}>
        <Text style={styles.text}>Already Registered?</Text>
        <TouchableOpacity onPress={signIn}>
          <Text style={{color:secondary_color, fontSize:13}}>Sign In</Text>
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
    marginBottom:20,
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

export default SignUp;
