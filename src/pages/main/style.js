import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 24,
        backgroundColor: '#1A1C19',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 52,
        textAlign:'center',
        fontWeight: 'bold',
        color: '#7F93CB',
        marginBottom: 64
    },

    button: {
        backgroundColor: '#7F93CB',
        color: '#fff',
        fontWeight: 'bold',        
        textAlign: 'center',
        borderRadius: 8,
        width: '100%',
        padding: 4,
        marginTop: 10,
        marginBottom: 10,
    },

    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32,
    },
})
