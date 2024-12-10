import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:  '#1c1b1b',
        padding: 20
    },

    avatarBox:{
        backgroundColor: '#2e2e2d',
        height: 370,
        width: '100%',
        borderRadius: 200
    },
    avatarImg:{
        height: '100%',
        width: '100%'
    },
    pencilEditIcon:{
        position: 'absolute',
        left: '95%',
        top: 405,
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        fontSize: 20,
        color: '#DE9519',
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        textTransform: 'uppercase',
        width: 100
    },
    userInfo:{
        display: 'flex',
        flexDirection: 'row',        
        borderColor: '#DE9519',
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userData:{
        width: '90%',
        color: 'ghostwhite',
        fontSize: 18
    }

})


export default styles