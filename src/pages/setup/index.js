import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'
import * as MailComposer from 'expo-mail-composer'


import style from './style'
import api from '../../services/api'


export default function Setup() {
    const navigation = useNavigation()
    const [question, setQuestion] = useState()
    const [alt_a, setAlt_a] = useState()
    const [alt_b, setAlt_b] = useState()
    const [alt_c, setAlt_c] = useState()
    const [alt_d, setAlt_d] = useState()
    const [answer, setAnswer] = useState()
    const [team, setTeam] = useState()

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: '⚠️ BUG ENCONTRADO',
            recipients: ['gustavo.fernandes12@fatec.sp.gov.br'],
            body: '<Relate aqui o que aconteceu>\n\n'
        })
    }

    function checkFields(values) {
        for (let i = 0; i < values.length; i++) {
            if (values[i] === undefined || values[i].length < 1) {
                return false
            }
        }

        return true
    }


    function insertQuestion() {
        if (!checkFields([question, alt_a, alt_b, alt_c, alt_d, answer, team])) {
            Alert.alert('ERRO', 'Preencha os campos corretamente.')
        } else {
            try {
                const data = {
                    pergunta: question,
                    alt_a: alt_a,
                    alt_b: alt_b,
                    alt_c: alt_c,
                    alt_d: alt_d,
                    resposta: answer,
                    equipe: team
                }

                Alert.alert('CADASTRAR PERGUNTA', 'Deseja cadastrar essa pergunta?', [{
                    text: 'SIM', onPress: () => {
                        Toast.show('Cadastrando pergunta...', 3)

                        api.post('game', data).then((response) => {
                            if (response.status === 201) {
                                Alert.alert('PERGUNTA CADASTRADA', `Pergunta cadastrada com sucesso para a equipe ${team.toUpperCase()}`)
                            } else {
                                Toast.show('Algo deu errado, tente novamente', 5)
                            }
                        })
                    }
                }, { text: 'NÃO', onPress: () => false }],
                    { cancelable: false }
                )

            } catch (error) {
                Toast.show(`ERRO: ${error}`, 5)
            }
        }
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={24} color='#7F93CB'></Feather>
                </TouchableOpacity>

                <Text style={style.header}>CADASTRO DE PERGUNTAS</Text>

                <TouchableOpacity onPress={sendMail}>
                    <Feather name='alert-triangle' size={24} color='#7F93CB'></Feather>
                </TouchableOpacity>
            </View>

            <ScrollView style={style.formArea}>
                <Text style={style.label}>PERGUNTA</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={style.textbox}
                    onChangeText={(text) => setQuestion(text)}
                    value={question}
                />

                <Text style={style.label}>ALTERNATIVA A</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={style.textbox}
                    onChangeText={(text) => setAlt_a(text)}
                    value={alt_a}
                />

                <Text style={style.label}>ALTERNATIVA B</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={style.textbox}
                    onChangeText={(text) => setAlt_b(text)}
                    value={alt_b}
                />

                <Text style={style.label}>ALTERNATIVA C</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={style.textbox}
                    onChangeText={(text) => setAlt_c(text)}
                    value={alt_c}
                />

                <Text style={style.label}>ALTERNATIVA D</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={style.textbox}
                    onChangeText={(text) => setAlt_d(text)}
                    value={alt_d}
                />

                <Text style={style.label}>RESPOSTA</Text>
                <Picker
                    style={style.combobox}
                    onValueChange={(itemValue, itemIndex) => setAnswer(itemValue)}
                    selectedValue={answer}
                >
                    <Picker.Item label='selecione uma alternativa' value='' />
                    <Picker.Item label='A' value='a' />
                    <Picker.Item label='B' value='b' />
                    <Picker.Item label='C' value='c' />
                    <Picker.Item label='D' value='d' />
                </Picker>

                <Text style={style.label}>EQUIPE</Text>
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

                <TouchableOpacity style={style.button} onPress={insertQuestion}>
                    <Text style={style.buttontext}>CADASTRAR PERGUNTA</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}
