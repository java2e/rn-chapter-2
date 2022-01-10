import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Oyun Bitti!
            </Text>
            <Text>Tahmin Sayısı : {props.roundsNumber}</Text>
            <Button title="Yeni Oyun!" onPress={props.onNewGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen;