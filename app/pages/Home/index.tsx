import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Home/styles";
import Logo from '@/assets/images/sustentable.png'
import { MaterialIcons, Entypo, Foundation } from "@expo/vector-icons";
import axios from "axios";

export default function Home({navigation}: {navigation: any}){

    const [weather, setWeather] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [weatherData, setWeatherData] = useState([])

        const checkData = async () => {

            await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo,BR&units=metric&appid=ceace7a93b2ac2b569793155446095bc&lang=pt_br').then(response => {
                setWeatherData(response.data)
                setWeather(weatherData.weather[0].description)
                setWeatherIcon(weatherData.weather[0].icon)
            })

        }

        checkData()
        
    return(

        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo}/>
            </View>

            <View style={styles.search}>
                <View style={styles.searchContainer}>

                </View>
            </View>

            <View style={styles.showSideBar}>
                <TouchableOpacity>
                    <MaterialIcons name='person' size={20} color={'#DE9519'} onPress={() => {
                        navigation.toggleDrawer()
                    }}/> 
                </TouchableOpacity>
            </View>

            <View style={styles.weatherBox}>
                <Text style={styles.airReport}>Clima :</Text> 
                <Text style={styles.airQuality}>{weather}</Text>
                <Image source={{uri: `https://openweathermap.org/img/wn/${weatherIcon}.png`,}} style={{height: 60, width: 60, backgroundColor: '#252525', borderRadius: 100}}/>
            </View>

            <TouchableOpacity style={styles.contentBox}>
                <Foundation name='graph-pie' color={'#DE9519'} size={45} />
                <Text style={styles.contentText}>Gasto energético</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contentBox}>
                <Entypo name='bar-graph' color={'#DE9519'} size={40}></Entypo>
                <Text style={styles.contentText}>Emissão de poluentes</Text>
            </TouchableOpacity>

            <View style={styles.scoreBox}>
                <Text style={[styles.scoreContent, {textAlign: 'left'}]}>Pontuação</Text>
                <Text style={styles.scoreContent}>652 Pontos <MaterialIcons name='star' size={20} color={'#DE9519'} /></Text>

                <View style={styles.slider}></View>
                <TouchableOpacity style={styles.sliderBall}></TouchableOpacity>
            </View>

        </View>
    )
}