import { View, Text, StyleSheet ,TextInput} from 'react-native'
import React, { useRef } from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function InputBox({inputMode, placeholder,onChangeText, value, secureTextEntry, bordercolor, onPress, style, onSubmitEditing, returnKeyType, ref}) {
  const inputRef=useRef();
  return (
    <TextInput style={[styles.container, { borderColor: bordercolor }, style]} 
    placeholder={placeholder} 
    onChangeText={onChangeText} 
    placeholderTextColor="gray"
    value={value}
    secureTextEntry={secureTextEntry}
    onPressIn={onPress}
    onSubmitEditing={onSubmitEditing}
    returnKeyType={returnKeyType}
    ref={ref}
    inputMode={inputMode}
/>
  )
}

const styles=StyleSheet.create({
    container:{
        width:wp(85),
        height:50,
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:"center",
        paddingHorizontal:15,
        fontSize:16,
        marginBottom:10,
        color:"black",
        borderWidth:1
    }
})