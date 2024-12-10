import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        padding: 20,
        backgroundColor: '#1c1b1b',
    },
    mainSection:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 150
    },
    sectionContent:{
        display: 'flex',
        flexDirection: 'column',
        color: 'ghostwhite',
        fontSize: 18
    },
    dataSection:{
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 60
    },
    label:{
        color: '#DE9519',
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontWeight: 'bold',
        textAlign: 'left',
        width: 350,
    },
    input:{
        width: 350,
        height: 55,
        backgroundColor: '#1c1b1b',
        color: '#b5b4b3',
        fontSize: 18,
        padding: 10,
        borderWidth: 2,
        borderColor: '#DE9519',
        marginTop: -100,
        borderRadius: 10
    },
    button:{
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#3d3d3d',
        borderRadius: 10,
        boxShadow: '0 15px 25px #141414',
        color: '#DE9519',
        fontSize: 16,
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
})


export default styles