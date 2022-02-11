import React,{Component} from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image } from 'react-native';

export default class HomeSceen extends Component {
    render(){
        return(
            <View style = {styles.container}>
               <ImageBackground source = {require("../assets/stars.gif")} style = {styles.background}>
                   <Text style = {styles.titleText}>Stellar App</Text>
                   <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('DailyPic')}} style = {styles.imgButton}>
                        <Text style = {styles.imgButtonText}>Daily Picture</Text>
                        <Image source = {require("../assets/photo.png")} style = {styles.imgButtonImg}></Image>
                   </TouchableOpacity>

                   <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('SpaceCrafts')}} style = {styles.imgButton}>
                        <Text style = {styles.imgButtonText}>Space Crafts</Text>
                        <Image source = {require("../assets/spacecraft.png")} style = {styles.imgButtonImg}></Image>
                   </TouchableOpacity>

                   <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('StarMap')}} style = {styles.imgButton}>
                        <Text style = {styles.imgButtonText}>Star Map</Text>
                        <Image source = {require("../assets/star_map.png")} style = {styles.imgButtonImg}></Image>
                   </TouchableOpacity>

               </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        resizeMode:"cover"
    },
    container:{
        flex:1
    },
    imgButton:{
        height:100,
        width:500,
        borderRadius:20,
        borderWidth:2,
        alignSelf:'center',
        marginTop:50,
        backgroundColor:"blue"
    },
    imgButtonText:{
        fontSize:50,
        textAlign:"center"
    },
    imgButtonImg:{
        position:"absolute",
        height:100,
        width:100,
        right:10
    },
    titleText:{
        fontSize:100,
        alignSelf:"center",
        textAlign:"center",
        marginTop:75,
        color:"white"
    }
})