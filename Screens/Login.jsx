/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  handlePress,
  Button,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Settings');
  };

  return (
    
    <View style={styles.mainContainer}>
    
    <View style={styles.mainContainer}>
    
    <Button title="Go to Settings" onPress={handlePress} />
  </View>

      <Text style={styles.mainHeader}>LOCAL VIBES</Text>
      <Text style={styles.description}>Username or email</Text>
      <TextInput style={styles.labels}></TextInput>
      <Text style={styles.description}>Password</Text>
      <TextInput style={styles.labels}></TextInput>
      <Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </Text>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.or}>
        <Text>or</Text>
      </View>
      <View>
         <Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.google}>Sign in with Google</Text>
        </TouchableOpacity>
      </Text>
      </View>
      <Text>Are you new
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link}>Create an Account</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#E4DBF1',
  },
  
  mainHeader: {
    textAlign: 'center',
    color: '#344055',
    fontWeight: '500',
    paddingTop: 150,
    fontSize: 40,
    marginBottom: 20,
    fontFamily: 'bold',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',

    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 20,
    color: '#7d7d7d',
    backgroundColor: '#FFFFFF',
    lineHeight: 25,
    fontFamily: 'regular',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  link: {
    color: '#8025FF',
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  or: {
    marginLeft: 162,
    marginTop: 30,
  },
  google: {
    color: 'black',
  },
});

export default Login;
