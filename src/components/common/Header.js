import { Text, View, StyleSheet } from "react-native";
import React from 'react';


const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.input1}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        paddingTop: 15,
        

    },
    input1: {
        fontSize: 20,
        color: 'black',
        //fontFamily: 'Cochin'
        
    }
});


export {Header};