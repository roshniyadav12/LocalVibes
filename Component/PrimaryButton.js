import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {secondary_color, black_button, background_color} from '../utils/Colors'

export default function PrimaryButton({onPress,text, width, style}) {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress} >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    btnContainer:{
        backgroundColor:black_button,
        height:50,
        width:wp(90),
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    btnText:{
        fontWeight:"600",
        fontSize:16,
        color:background_color,
    }
})