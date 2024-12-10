import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../DeleteProfile/styles";
import Logo from '@/assets/images/sustentable.png'
import AwesomeAlert from "react-native-awesome-alerts";
import axios from "axios";
import * as Device from 'expo-device'



export default function DeleteProfile({navigation} : {navigation: any}){

    const [value, setValue] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [showSecondAlert, setShowSecondAlert] = useState(false)
    const [showThirdAlert, SetShowThirdAlert] = useState(false)
    const [data, setData] = useState([])


    const deviceModel = Device.modelName


    useEffect(() => {

        axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/check-user', {
            'deviceModel': deviceModel 
        }).then((response) => {
            if(response.status === 200){
                setData(response.data)
            }
        })
    }, [])

    const handleDeleteAccount = async () => {
        
        await axios.post('https://22c3-187-8-118-138.ngrok-free.app/api/sustentable/deleteUser', {
            'id': data.response.id
        }).then((response) => {
            if(response.status){
                SetShowThirdAlert(!showThirdAlert)
            }
            else{
                Alert.alert('Algo de errado aconteceu no meio do caminho...')
            }
        })
    }

    return(

        <View style={styles.container}>
            <View style={styles.mainSection}>
                <Image source={Logo}/>

                <Text style={styles.sectionContent}>Se deseja excluir sua conta, digite: <Text style={{color: '#910404'}}>"Delete my account"</Text></Text>

                <View style={styles.dataSection}>

                    <Text style={styles.label}>Digite</Text>
                    <TextInput style={styles.input} placeholder="Delete my profile..." placeholderTextColor={"#666869"} onChangeText={setValue} value={value}></TextInput>

                    <TouchableOpacity onPress={() => {
                        value === 'Delete my account' ? setShowAlert(!showAlert) : setShowSecondAlert(!showSecondAlert)
                    }}>
                        <Text style={styles.button}>Excluir conta</Text>
                    </TouchableOpacity>

                    {/* firts alert */}
                    <AwesomeAlert 
                        show={showAlert}
                        title="Deletar"
                        message={'Deseja mesmo deletar sua conta?'}
                        closeOnTouchOutside={true}
                        showConfirmButton={true}
                        showCancelButton={true}
                        confirmText="Sim"
                        cancelText="Cancelar"
                        confirmButtonColor="#DE9519"
                        cancelButtonColor="black"
                        onConfirmPressed={() => {
                            handleDeleteAccount()
                            setShowAlert(!showAlert)

                        }} 
                        onCancelPressed={() => {
                            setShowAlert(!showAlert)
                        }}
                    />

                    {/* second alert */}
                    <AwesomeAlert 
                        show={showSecondAlert}
                        title="Erro"
                        message={'Digite a frase em destaque para deletar sua conta...'}
                        closeOnTouchOutside={true}
                        showConfirmButton={true}
                        confirmText="Ok"
                        confirmButtonColor="#DE9519"
                        onConfirmPressed={() => {
                            console.log(value)
                            setShowSecondAlert(!showSecondAlert)
                        }} 
                    />

                    {/* third alert */}
                    <AwesomeAlert 
                        show={showThirdAlert}
                        title="Sucesso!"
                        message={'Conta deletada com sucesso!'}
                        closeOnTouchOutside={true}
                        showConfirmButton={true}
                        confirmText="Ok"
                        confirmButtonColor="#DE9519"
                        onConfirmPressed={() => {
                            setTimeout(() => {
                                navigation.jumpTo('Login')
                            }, 1000)
                        }} 
                    />
                </View>
            </View>
        </View>

    )
}