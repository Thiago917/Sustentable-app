import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import styles from "./styles";
import Logo from '@/assets/images/sustentable.png'
import Effect from '@/assets/images/digitalEffect.png'
import { MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from "axios";
import * as Device from 'expo-device'


export default function Cadastro ({navigation}: {navigation: any} ) {

    const [firstEye, setFirstEye] = useState('password')
    const [secondEye, setSecondEye] = useState('password')
    const [firstPassword, setFirstPassword] = useState(true)
    const [secondPassword, setSecondPassword] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [secondPass, setSecondPass] = useState('')
    const [passStyle, setPassStyle] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertContent, setAlertContent] = useState('')

    const deviceModel = Device.modelName

    const lookFirstEye = () => {

        if(firstEye === 'password'){
            setFirstEye('text');
            setFirstPassword(false);
        }
        else{
            setFirstEye('password')
            setFirstPassword(true)
        }
        
    }

    const lookSecondEye = () => {
        if(secondEye === 'password'){
            setSecondEye('text');
            setSecondPassword(false)
        }
        else {
            setSecondEye('password')
            setSecondPassword(true)
        }
    }

    const registerUser = () => {

        if(name && (email && email.includes('@')) && pass && secondPass){
            if(pass != secondPass){
                Alert.alert('Erro', 'As senhas não são iguais')
                setPassStyle(true)
            }
            else{
                setPassStyle(false)

                axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/check-user', {
                    name: name,
                    email: email,
                    password: pass,
                    device: deviceModel

                }).then((response) => {
                    if(response.status === 200){

                        setShowAlert(!showAlert)
                        setAlertContent(response.data.response)


                        setTimeout(() => {

                            navigation.navigate('Login')

                        }, 1500)
                    }
                    else{
                        setAlertContent(response.data.response)
                    }
                })
                
            }
        }
        else{
            Alert.alert('Preencha as informações corretamente...')
        }
        
    }


    return (
        <View style={styles.container}>
            
            <View style={styles.logo}>
                <Image source={Logo}/>
            </View>

            <View style={styles.form}>

                <View>
                
                    <Text style={styles.label}>Nome completo</Text>
                    <View style={styles.email}>
                        <TextInput placeholder='Ex.: Name Example' placeholderTextColor='#666869' style={styles.name} value={name} onChangeText={setName}/> 
                        <MaterialIcons name='person' size={20} color={'gray'}/>
                    </View>
                
                </View>

                <View>
                    
                    <Text style={styles.label}>E-mail</Text>
                    <View style={styles.email}>
                        <TextInput  keyboardType="email-address" placeholder='Ex.: example@123.com.br' placeholderTextColor='#666869' style={styles.input} value={email} onChangeText={setEmail} /> 
                        <MaterialIcons name='email' size={20} color={'gray'}/>
                    </View>
                
                </View>

                <View>

                    <Text style={styles.label}>Senha</Text>

                    <View style={styles.senha}>
                    
                        <TextInput textContentType='password' placeholder='Ex.: ***********' placeholderTextColor='#666869' style={styles.input} id='password' secureTextEntry={firstPassword} value={pass} onChangeText={setPass}/> 

                        {firstEye === 'password' ? (
                            <MaterialCommunityIcons name='lock' size={20} color={'gray'} onPress={lookFirstEye} id='password_icon'/>

                        ): (
                            <FontAwesome name='unlock' size={20} color={'gray'} onPress={lookFirstEye} id='password_icon'/>

                        )}

                    </View>
                   
                </View>

                    <View>

                        <Text style={styles.label}>Confirme a senha</Text>

                        <View style={[styles.senha, passStyle ? {borderColor: 'red'} : {borderColor: '#DE9519'}]}>

                            <TextInput textContentType='password' placeholder='Ex.: ***********' placeholderTextColor='#666869' style={styles.input} id='password' secureTextEntry={secondPassword} value={secondPass} onChangeText={setSecondPass}/> 
                            {secondEye === 'password' ? (
                                <MaterialCommunityIcons name='lock' size={20} color={'gray'} onPress={lookSecondEye} id='password_icon'/>
                            ): (
                                <FontAwesome name='unlock' size={20} color={'gray'} onPress={lookSecondEye} id='password_icon'/>
                            )}

                        </View>

                    </View>

                    <TouchableOpacity style={styles.button} onPress={registerUser}>
                        <Text style={styles.button_entrar}>Cadastre-se</Text>
                    </TouchableOpacity>
                    <AwesomeAlert 
                        show={showAlert}
                        title="Sucesso"
                        message={alertContent}
                        closeOnTouchOutside={true}
                        showConfirmButton={true}
                        confirmText="OK"
                        confirmButtonColor="#DE9519"
                        onConfirmPressed={() => setShowAlert(false)}
                    />
            </View>
                        
            <View style={styles.footer}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.create_account}>Já tenho uma conta</Text>
                </TouchableOpacity>

            </View>
            <Image source={Effect} style={styles.digitalEffect_image}/>
        </View>
    )
}