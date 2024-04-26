import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { background_color, black_button, gray, post_Background } from '../utils/Colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Post() {
    const image=require('../Assets/post.png')
    const profile=require('../Assets/post1.png')
    const name="Anokhi";
    const category="Handmade Things";
    const productName="Handmade Candle";
    const productQuality="Eco Friendly Product"
  return (
    <View style={styles.container}>
        <View>
        <Image source={image} style={styles.img}/>
        <Text style={styles.product}>{productName}</Text>
        <View style={styles.productDescription}>
            <View style={{flex:1}}>
            <Text style={[styles.nameStyle,{fontSize:17, fontWeight:"600"}]}>{productName}</Text>
            <Text style={[styles.categoryStyle,{fontSize:12, lineHeight:14}]}>{productQuality}</Text>
            </View>
            <View style={{width:40, height:40, borderRadius:200, backgroundColor:"#383838", alignSelf:"flex-end", alignItems:"center", justifyContent:"center" }}>
                <TouchableOpacity>
                    <AntDesign name='arrowright' size={20} color={background_color}/>
                </TouchableOpacity>
            </View>
        </View>
        </View>
        <View style={styles.description}>
            <View>
                <Image source={profile} style={styles.profilePicture}/>
            </View>
            <View style={{marginLeft:15, flex:1}}>
                <Text style={styles.nameStyle}>{name}</Text>
                <Text style={styles.categoryStyle}>{category}</Text>
            </View>
            <View style={styles.reactionContainer}>
                <TouchableOpacity>
                    <AntDesign name='hearto' size={25} color={black_button}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name='comment-o' size={25} color={black_button}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='bookmark-outline' size={25} color={black_button}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:post_Background,
        width:wp(90),
        borderRadius:30,
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:15,
        marginBottom:25,
        elevation:2
    },
    img:{
        width:wp(84),
        height:260,
        borderRadius:20
    },
    description:{
        flexDirection:"row",
        width:wp(84),
        marginTop:15,
        alignItems:"center"
    },
    profilePicture:{
        width:50,
        height:50,
        borderRadius:100
    },
    nameStyle:{
        color:black_button,
        fontSize:20,
        fontWeight:"600",
        lineHeight:20
    },
    categoryStyle:{
        color:black_button,
        lineHeight:16,
        fontWeight:"300"
    },
    reactionContainer:{
        flexDirection:"row",
        verticalAlign:"flex-end",
        gap:10,
    },
    product:{
        color:black_button,
        position:"absolute",
        top:15,
        left:15,
        fontWeight:"bold",
        fontSize:18,
        width:"30%"
    },
    productDescription:{
        marginTop:20,
        backgroundColor:"rgba(255,255,255,0.8)",
        position:"absolute",
        bottom:10,
        width:"95%",
        paddingVertical:5,
        paddingLeft:20,
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        paddingRight:10,
        alignSelf:"center"
    }
,})