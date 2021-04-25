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
        marginBottom: 6
    },

    label: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 12,
        marginBottom: 4
    },

    textbox: {
        color: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 4,
        fontSize: 18,
        marginBottom: 12,
        textAlign: 'justify',
        textAlignVertical: 'top'
    },

    combobox: {
        color: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 4,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },

    button: {
        backgroundColor: '#7F93CB',
        borderRadius: 8,
        padding: 4,
        marginTop: 28,
        marginBottom: 36,
    },

    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32,
    },
})
