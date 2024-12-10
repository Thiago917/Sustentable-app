import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../Profile/styles";
import Avatar from '@/assets/images/avatar.png'
import axios from "axios";
import * as Device from 'expo-device'
import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AwesomeAlert from 'react-native-awesome-alerts';


export default function Profile({navigation} : {navigation: any}){

    const deviceModel = Device.modelName
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [pass, setPass] = useState(true)
    const [passIcon, setPassIcon] = useState(true)
    const [disable, setDisable] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showSecondAlert, setShowSecondAlert] = useState(false)
    const [showThirdAlert, setShowThirdAlert] = useState(false)
    const [isOnEditMode, setIsOnEditMode] = useState(false)
    const [userData, setUserData] = useState([])


    useEffect(() => {

        
        axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/check-user', {
            'deviceModel': deviceModel 
        }).then((response) => {
            if(response.status === 200){
                setEmail(response.data.response.mail)
                setSenha(response.data.response.pass)
                setMail(response.data.response.mail)
                setPassword(response.data.response.pass)
                setUserData(response.data.response)
            }
        })
        
        
    }, [])
    

    const editUserInfo = () => {

        axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/update-user-info', {
            'mail': mail,
            'password': password,
            'id': userData.id
        }).then((response) => {
                if(response.status === 200){
                    setShowThirdAlert(!showThirdAlert)
                }
        })
        
    }

      

    

    return(
        <View style={styles.container}>
            <View style={styles.avatarBox}>
                <Image source={Avatar} style={styles.avatarImg}/>
            </View>

            <TouchableOpacity style={styles.pencilEditIcon}>

                {/* First alert */}
                <AwesomeAlert 
                    show={showAlert}
                    title="Edição"
                    message={'Deseja editar as informações de cadastro?'}
                    closeOnTouchOutside={true}
                    showConfirmButton={true}
                    showCancelButton={true}
                    confirmText="SIM"
                    cancelText="NÃO"
                    confirmButtonColor="#DE9519"
                    cancelButtonColor="black"
                    onConfirmPressed={() => {
                        setDisable(true)
                        setShowAlert(!showAlert)
                        setIsOnEditMode(true)

                    }}
                    onCancelPressed={() => {
                        setShowAlert(!showAlert)
                    }}
                />

                {/* Second Alert */}
                <AwesomeAlert 
                    show={showSecondAlert}
                    title="Confirmar"
                    message={'Deseja confirmar a edição?'}
                    closeOnTouchOutside={true}
                    showConfirmButton={true}
                    showCancelButton={true}
                    confirmText="SIM"
                    cancelText="NÃO"
                    confirmButtonColor="#DE9519"
                    cancelButtonColor="black"
                    onConfirmPressed={() => {
                        setDisable(false)
                        setShowSecondAlert(!showSecondAlert)
                        setIsOnEditMode(false)

                        editUserInfo()

                    }}

                    onCancelPressed={() => {
                        setShowSecondAlert(!showSecondAlert)
                        setIsOnEditMode(false)
                        setDisable(false)

                    }}
                />

                {/* Third Alert */}
                <AwesomeAlert 
                    show={showThirdAlert}
                    title="Sucesso"
                    message={'Dados do usuário editados com sucesso!'}
                    closeOnTouchOutside={true}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonColor="#DE9519"
                    onConfirmPressed={() => {
                        setShowThirdAlert(!showThirdAlert)
                        setTimeout(() => {
                            navigation.jumpTo('Home')
                        }, 1000)

                    }}
                />      
                
                {
                    isOnEditMode === true ? (
                        <AntDesign name='checkcircle' color={'green'} size={30} onPress={() => {
                            setShowSecondAlert(!showSecondAlert)
                            }}/>
                    ): (
                        <FontAwesome name='pencil' size={20} color={'gray'} style={{left: 1}} onPress={() => {
                            setShowAlert(!showAlert)
                            }}/>
                    )
                }

            </TouchableOpacity>
            <View>
                <Text style={styles.label}>Email</Text>

                <View style={[styles.userInfo, disable ? {opacity: 0.9} : {opacity: 0.5}]}>
                    <TextInput style={styles.userData} editable={disable} onChangeText={setMail} value={mail}></TextInput>
                    <MaterialIcons name='email' size={20} color={'gray'}/>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Senha</Text>
                <View style={[styles.userInfo, disable ? {opacity: 1} : {opacity: 0.5}]}>
                    <TextInput style={styles.userData} secureTextEntry={pass} editable={disable} onChangeText={setPassword} value={password}></TextInput>

                    {
                        passIcon === true ? (
                            <MaterialCommunityIcons name='lock' size={20} color={'gray'} onPress={() => {
                                if(disable === true){
                                    setPass(!pass)
                                    setPassIcon(!passIcon)
                                } 
                            }}/>
                        ): (
                            <FontAwesome name='unlock' size={20} color={'gray'} onPress={() => {
                                if(disable === true){
                                    setPass(!pass)
                                    setPassIcon(!passIcon)
                                }
                            }}/>
                        ) 
                    }

                </View>
            </View>
        </View>
    )
}
