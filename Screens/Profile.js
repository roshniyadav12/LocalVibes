import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { black_button } from '../utils/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Profile({navigation}) {
  const openSetting=()=>{
    navigation.navigate('Settings');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openSetting}>
      <MaterialIcons name='settings' size={30} color={black_button} style={styles.setting}/>
      </TouchableOpacity>
      <Text style={{color:black_button}}>Profile</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:15,
    paddingHorizontal:15
  },
  setting:{
    position:"absolute",
    top:0,
    right:0
  }
})