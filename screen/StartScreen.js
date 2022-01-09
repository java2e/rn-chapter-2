import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from '../constants/colors';

const StartScreen = props => {

    const [numberValue, setNumberValue] = useState('');

    const numberInputHandler = inputText => {
        setNumberValue(inputText.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Yeni Oyna Başla!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Bir sayı giriniz!</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={numberValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Sıfırla" onPress={() => { }} color={Colors.mainColor} />
                        </View>
                        <View style={styles.button}>
                            <Button title="OK" onPress={() => { }} color={Colors.secondColor} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})

export default StartScreen;