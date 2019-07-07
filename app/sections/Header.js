import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text} >taskr</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#fb0',
        borderBottomWidth: 2
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        flex: 1,
        marginTop: 20
    }
});