import React from 'react';
import { View, Text, StyleSheet, Button, Switch, TouchableOpacity } from 'react-native';
import { black_button, primary_color } from '../utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { setLogout } from '../Redux/authSlice';
import { useDispatch } from 'react-redux';

const Settings = ({navigation}) => {
  const dispatch=useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
    navigation.navigate('Choice')
  };

  const handlePress = (setting) => {
    // Handle press based on the setting
    console.log(`Pressed ${setting}`);
  };
  

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.heading}>Settings</Text>
      </View>

      {/* Saved */}
      <TouchableOpacity onPress={() => handlePress('Saved')} style={styles.section}>
        <Text style={styles.sectionHeading}>Saved</Text>
      </TouchableOpacity>

      {/* Security and Privacy */}
      <TouchableOpacity onPress={() => handlePress('Security and Privacy')} style={styles.section}>
        <Text style={styles.sectionHeading}>Security and Privacy</Text>
      </TouchableOpacity>

      {/* Customer Support */}
      <TouchableOpacity onPress={() => handlePress('Customer Support')} style={styles.section}>
        <Text style={styles.sectionHeading}>Customer Support</Text>
      </TouchableOpacity>

      {/* Mute Account */}
      <TouchableOpacity onPress={() => handlePress('Mute Account')} style={styles.section}>
        <Text style={styles.sectionHeading}>Mute Account</Text>
      </TouchableOpacity>

      {/* Block */}
      <TouchableOpacity onPress={() => handlePress('Block')} style={styles.section}>
        <Text style={styles.sectionHeading}>Block</Text>
      </TouchableOpacity>

      {/* Dark Mode */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Dark Mode</Text>
        <Switch /* Implement dark mode switch */ />
      </View>

      {/* Help */}
      <TouchableOpacity onPress={() => handlePress('Help')} style={styles.section}>
        <Text style={styles.sectionHeading}>Help</Text>
      </TouchableOpacity>

      {/* About */}
      <TouchableOpacity onPress={() => handlePress('About')} style={styles.section}>
        <Text style={styles.sectionHeading}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={{color:black_button, fontSize:16, fontWeight:"600"}}>Logout</Text>
        <MaterialIcons name='logout' size={20} color={black_button}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },
  header: {
    backgroundColor: '#E4DBF1',
    height: '25%',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
 
    fontSize: 24,
  
    
  },
  section: {
    marginBottom: 20,
    
   marginLeft:30,

  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 10,
    color:'black',
  },

  logout:{
    backgroundColor:primary_color,
    paddingVertical:10,
    paddingHorizontal:15,
    alignItems:"center",
    borderRadius:10,
    alignSelf:"center",
    flexDirection:"row",
    gap:10,
    elevation:2
  }
});

export default Settings;
