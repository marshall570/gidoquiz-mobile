import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNavigation, useRoute } from '@react-navigation/native'


import style from './style'

export default function Main() {
    const navigation = useNavigation()

    return (
        <View style={style.container}>            
            <Text style={style.title}>GIDO QUIZ COMPANION</Text>

            <TouchableOpacity style={style.button} onPress={() => (navigation.navigate('Setup'))}>
                <Text style={style.buttontext}>CADASTRAR PERGUNTAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => (navigation.navigate('List'))}>
                <Text style={style.buttontext}>LISTAR PERGUNTAS</Text>
            </TouchableOpacity>
        </View>
    )
}
