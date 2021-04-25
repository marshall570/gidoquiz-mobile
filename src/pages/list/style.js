import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 24,
        backgroundColor: '#1A1C19',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24
    },

    textbox: {
        color: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 4,
        fontSize: 18,
        textAlign: 'center',
    },

    combobox: {
        color: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 4,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },

    button: {
        backgroundColor: '#7F93CB',
        color: '#fff',
        borderRadius: 8,
        padding: 4,
        fontWeight: 'bold',
        marginTop: 18,
        marginBottom: 36,
    },

    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32,
    },

    listItem: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 12,
        marginVertical: 12,        
        alignItems: 'center',
        justifyContent: 'center',
    },

    listItemText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
