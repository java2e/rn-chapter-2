import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const StartScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Yeni Oyna Başla!</Text>
            <View style={styles.inputContainer}>
                <Text>Bir sayı giriniz!</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Sıfırla" onPress={() => {}}/>
                    <Button title="OK" onPress={() => {}} />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize:20,
        marginVertical:10
    },
    buttonContainer : {
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal:15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width :0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.30,
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10
    }
})

export default StartScreen;