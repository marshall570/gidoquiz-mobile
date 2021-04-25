import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { FlatList, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'


import style from './style'
import api from '../../services/api'

export default function List() {
    const navigation = useNavigation()
    const [team, setTeam] = useState()
    const [code, setCode] = useState()
    const [questions, setQuestions] = useState([])

    function navigateBack() {
        navigation.goBack()
    }

    function checkPIN(selected_team, code) {
        const pins = {
            tha: 'm0rDr3d',
            nyx: 'S1egFr13d',
            raf: '4sT0lfo',
            bdtwd: 'A7aL4nt3',
            gdv: '1sK4nD3r',
            vis: 'J34ne',
            ltr: '9ilg4M3sh',
            aap: 'P3Ndr490n'
        }        

        if (code === pins[(selected_team)]) {           
            return true
        } else {
            return false
        }
    }

    function loadList(selected_team, code) {
        setQuestions([])

        if (checkPIN(selected_team, code)) {
            api.get(`questions?tn=${team}`).then((response) => {
                setQuestions([...questions, ...response.data])
            })
        } else {
            Alert.alert('ERRO', 'O código digitado não é válido.\nDigite outro código e tente novamente')
        }
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={26} color='#7F93CB' />
                </TouchableOpacity>
            </View>

            <View>
                <Picker style={style.combobox}
                    style={style.combobox}
                    onValueChange={(itemValue, itemIndex) => setTeam(itemValue)}
                    selectedValue={team}
                >
                    <Picker.Item label='selecione uma equipe' value='' />
                    <Picker.Item label='THA' value='tha' />
                    <Picker.Item label='NYX' value='nyx' />
                    <Picker.Item label='RAF' value='raf' />
                    <Picker.Item label='BDTW' value='bdtw' />
                    <Picker.Item label='GDV' value='gdv' />
                    <Picker.Item label='VIS' value='vis' />
                    <Picker.Item label='LTR' value='ltr' />
                    <Picker.Item label='AAP' value='aap' />
                </Picker>

                <TextInput
                    placeholder={'Digite o CÓDIGO SECRETO da equipe'}
                    secureTextEntry={true}
                    onChangeText={(text) => setCode(text)}
                    value={code}
                    style={style.textbox}
                />

                <TouchableOpacity style={style.button} onPress={() => loadList(team, code)}>
                    <Text style={style.buttontext}>GERAR LISTA</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={questions}
                style={style.list}
                keyExtractor={question => String(question._id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: question }) => (
                    <View style={style.listItem}>
                        <Text style={style.listItemText}>{question.pergunta}</Text>
                    </View>
                )}
            />

        </View>
    )
}
