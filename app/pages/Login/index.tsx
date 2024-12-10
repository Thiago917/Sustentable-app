import React, {useEffect, useState} from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import Logo from '@/assets/images/sustentable.png'
import Effect from '@/assets/images/digitalEffect.png'
import styles from "./styles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {Text, View, Image, TextInput, Linking, TouchableOpacity, Alert} from 'react-native'
import axios from "axios";
import AwesomeAlert from 'react-native-awesome-alerts';
import * as Device from 'expo-device'


export default function Login({navigation}: {navigation: 'any'}){

    // const navigation = useNavigation<NavigationProp<any>>();

    const [eye, setEye] = useState('password')
    const [password, setPassword] = useState(true)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [alertContent, setAlertContent] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const deviceModel = Device.modelName


    // Verifica se o dispositivo já está cadastrado junto com o cadastro do usuário, se existir, preenche automáticamente os campos de email e senha do usuário conforme o ultimo registro desse dispositivo no banco de dados
    useEffect(() => {

        axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/check-user', {
            'deviceModel': deviceModel 
        }).then((response) => {
            if(response.status === 200){
                
                setEmail(response.data.response.mail)
                setSenha(response.data.response.pass)
            }
        })
    }, [])


    const lookPassword = () => {
        
        if(eye === 'password'){
            setEye('text');
            setPassword(false);
        }
        
        else{
            setEye('password')
            setPassword(true)
        }

    }

    const checkLogin = () => {


        if((email && email.includes('@')) && senha){
           
            axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/get-user', {
                'email': email,
                'senha': senha
            }).then((response) => {
                if(response.status === 200){
                    setAlertContent(response.data.response)
                    setShowAlert(true)

                    setTimeout(() => {
                        
                        navigation.navigate('Home')
                    }, 1500)

                }
                else{
                    setAlertContent(response.data.response)
                }
            })
        }
        

        else{    
            Alert.alert('Preencha as informações corretamente...') 
        }

    }
    
    return (
        <View style={styles.container} >
            
            <View style={styles.logo}>
                <Image source={Logo}/>

            </View>

            <View style={styles.form}>

                <View>
                    <Text style={styles.label}>E-mail</Text>
                    <View style={styles.email}>
                        <TextInput  keyboardType="email-address" placeholder='Ex.: example@123.com.br' placeholderTextColor='#666869' style={styles.input} value={email} onChangeText={setEmail}/> 
                        <MaterialIcons name='email' size={20} color={'gray'}/>
                    </View>
                </View>

                <View>

                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.senha}>
                    
                        <TextInput textContentType='password' placeholder='Ex.: ***********' placeholderTextColor='#666869' style={styles.input} id='password' secureTextEntry={password} value={senha} onChangeText={setSenha}/> 
                        {eye === 'password' ? (
                            <MaterialCommunityIcons name='eye' size={20} color={'gray'} onPress={lookPassword} id='password_icon'/>

                        ): (
                            <MaterialCommunityIcons name='eye-off' size={20} color={'gray'} onPress={lookPassword} id='password_icon'/>

                        )}

                    </View>

                </View>

                    <TouchableOpacity onPress={() => {
                        Linking.openURL('/')
                    }}><Text style={styles.forgot_pass}>Esqueceu sua senha?</Text></TouchableOpacity>
                    
                <View>
                    <TouchableOpacity style={styles.button} onPress={checkLogin}>
                        <Text style={styles.button_entrar}>Entrar</Text>
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
            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.create_account}>Criar uma conta</Text>
                </TouchableOpacity>

            </View>
            <Image source={Effect} style={styles.digitalEffect_image}/>
        </View>
    )
}