import { View, Text , StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Post from '../Component/Post'
import { background_color, black_button, primary_color } from '../utils/Colors'
import { Image } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/authSlice'

export default function HomeScreen() {
  const headerImg=require('../Assets/Designer.png')
  const user=useSelector(selectUser)
  console.log("user",user);
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Local Vibes</Text>
      </View>
      <ScrollView contentContainerStyle={{
      alignItems:"center",
      paddingTop:15,
      paddingHorizontal:15,
      backgroundColor:background_color,
    }} style={styles.container}>
      <Post/>
      <Post/>
      <Post/>
    </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor:primary_color,
    paddingHorizontal:20,
    paddingVertical:15,
    flexDirection:"row",
    elevation:20,
    
  },
  headerText:{
    color:black_button,
    fontWeight:"bold",
    fontSize:18,
    fontFamily:"serif"
  },
  img:{
    width:50,
    height:50
  }
})