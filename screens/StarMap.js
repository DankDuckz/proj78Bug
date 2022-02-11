import React,{Component} from 'react'
import {View,Text,TextInput} from 'react-native'
import {WebView} from 'react-native-web'

const {longitude, latitude} = this.state
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

export default class StarMap extends Component {
    constructor(){
        super()
        this.state = {
            longitude:'',
            latitude:''
        }
    }
    render(){
        return(
            <View>
                <WebView scalesPageToFit = {true}
                source= {{uri:path}}
                style = {{marginTop:20, marginBottom:20}}
                />
                <TextInput style = {{height:40,borderColor:"gray",borderWidth:1}}
                placeholder = "enter your longitude"
                onChangeText = {(text) => {
                    this.setState({
                        longitude:text
                    })
                }}/>
                <TextInput style = {{height:40,borderColor:"gray",borderWidth:1}}
                placeholder = "enter your latitude"
                onChangeText = {(text) => {
                    this.setState({
                        latitude:text
                    })
                }}/>

            </View>
        )
    }
}