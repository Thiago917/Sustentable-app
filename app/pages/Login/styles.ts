import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1b1b',
        padding: 50,
        gap: '100'
    },
    logo:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    },
    form:{
        height: 300,
        width: '100%',
        display: 'flex',
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        color: '#DE9519',
        marginBottom: 10,
        paddingLeft: 5,
    },
    input:{
        height: 40,
        width: 300,
        borderColor: '#DE9519',
        borderRadius: 7,
        paddingLeft: 10,
        color: '#cfcdcc',
        outline: 'none'
    },
    email:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#DE9519',
        paddingRight: 20,
        paddingLeft: 10,
        borderWidth: 1,
    },
    senha:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#DE9519',
        paddingRight: 20,
        paddingLeft: 10,
        borderWidth: 1,
    },
    forgot_pass:{
        color: '#DE9519',
        textAlign: 'center',
        fontSize: 14
    },
    button:{
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',
        width: 200,
        height: 40,
        backgroundColor: '#3d3d3d',
        borderRadius: 10,
        boxShadow: '0 15px 25px #141414'
    },
    button_entrar:{
        color: '#DE9519',
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        letterSpacing: 2,
    },
    create_account:{
        color: '#DE9519',
        textAlign: 'center',
        fontSize: 16
    },
    footer:{
        height: 100,
        width: 200,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        zIndex: 2,
    },
    digitalEffect_image:{
        height: 500,
        width: 500,
        position: 'absolute',
        top: 600,
        right: -280,
        borderRadius: 500,
        opacity: .5,
        zIndex: 1,
    },
    
})

export default styles