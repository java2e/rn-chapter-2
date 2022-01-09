import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from '../constants/colors';

const StartScreen = props => {

    const [numberValue, setNumberValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setNumberValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setNumberValue('');
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(numberValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Sayı 1 ila 99 arasında olmalıdır!',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setNumberValue('');
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text>Seçilen Numara : {selectedNumber}</Text>
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
                            <Button title="Sıfırla" onPress={resetInputHandler} color={Colors.mainColor} />
                        </View>
                        <View style={styles.button}>
                            <Button title="OK" onPress={confirmInputHandler} color={Colors.secondColor} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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