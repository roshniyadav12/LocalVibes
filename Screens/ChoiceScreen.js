import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { background_color, black_button, primary_color } from '../utils/Colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ChoiceScreen({navigation}) {
  const customerImg=require('../Assets/customer.png')
  const vendorImg=require('../Assets/vendor.png')
  const [select, setSelect]=useState('')

  const handleCustomer=()=>{
    setSelect("customer")
  }

  const handleVendor=()=>{
    setSelect("vendor")
  }

  const next=()=>{
    if(select==="vendor"){
      navigation.navigate('Vendor Registration')
    }else{
      navigation.navigate('User Registration')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.headerText,{fontSize:24}]}>Select Your Type</Text>
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <TouchableOpacity style={[styles.btn, {borderColor:select==="customer"?black_button:background_color}]} activeOpacity={1} onPress={handleCustomer}>
          <Text style={styles.headerText}>Customer</Text>
          <Image source={customerImg} style={styles.img}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {borderColor:select==="vendor"?black_button:background_color}]} activeOpacity={1} onPress={handleVendor}>
          <Text style={styles.headerText}>Vendor</Text>
          <Image source={vendorImg} style={styles.img}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextBtn} onPress={next}>
        <AntDesign name='arrowright' size={27} color={black_button}/>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:25,
    paddingVertical:20,
    backgroundColor:primary_color
  },
  headerText:{
    color:black_button,
    fontSize:20,
    fontWeight:"500",
  },
  btn:{
    width:wp(80),
    flexDirection:"row",
    alignItems:"center",
    borderWidth:2,
    justifyContent:"space-around",
    paddingHorizontal:5,
    marginBottom:25,
    borderRadius:20,
    elevation:1,
    backgroundColor:background_color,
  },
  img:{
    width:180, 
    height:180
  },
  nextBtn:{
    width:60,
    height:60,
    backgroundColor:background_color,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100,
    elevation:2,
    alignSelf:"flex-end",
    marginBottom:10,
    marginRight:5
  }

})