import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:  '#1c1b1b'
    },
    logo:{
        position: 'absolute',
        top: 70,
        right: 120,
    },
    search:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    searchContainer:{
        backgroundColor: '#2e2d2d',
        height: 55,
        width: '100%',
        borderRadius: 100,
        padding: 10
    },
    showSideBar:{
        position: 'absolute',
        backgroundColor: '#1c1b1b',
        height: 40,
        width: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: 128,
        left: 30
    },
    sideBar:{
        position: 'absolute',
        height: 100,
        backgroundColor: '#1c1b1b',
        width: 200,
    },
    weatherBox:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        top: 20,
        width: 100
    },
    airReport:{
        display: 'flex',
        flexDirection: 'row',
        color: 'ghostwhite',
        textTransform: 'uppercase',
        fontSize: 20,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    airQuality:{
        color: '#DE9519',
        textTransform: 'uppercase',
        fontSize: 20,
        width: 200
    },
    contentBox:{
        display: 'flex',
        flexDirection: 'row',
        width: '99%',
        height: 100,
        backgroundColor: '#2e2e2d',
        marginBottom: 20,
        top: 60,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
        borderRadius: 20,
    },
    contentText:{
        color: 'ghostwhite',
        fontSize: 32,
        width: 160,
        fontFamily: 'Inter'
    },
    scoreBox:{
        display: 'flex',
        flexDirection: 'column',
        width: '99%',
        height: 300,
        top: 80,
        padding: 10,
        gap: 50,
    },
    scoreContent:{
        color: '#DE9519',
        fontSize: 27,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    slider:{
        width: '100%',
        backgroundColor: '#0C0C0C',
        height: 15,
        borderRadius: 50
    },
    sliderBall:{
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: '#DE9519',
        position: 'absolute',
        top: 170,
        left: 185
    }
})

export default styles