import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    header :{
        width: '100%',
        height: 90,
        paddingTop:35,
        backgroundColor: '#7B0CF2',
        alignItems:'center'
    },
    title: {
        color: 'white',
        fontSize: 18,
        paddingTop:10
    }
})
export default Header;