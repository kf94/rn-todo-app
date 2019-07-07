import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default class Details extends Component {

    render() {
        console.log(this.props.inspect)
        return (
            <View style={styles.main}>
                <View style={styles.top}>
                    <Text style={styles.title}>
                        Details for : {this.props.inspect}
                    </Text>
                </View>
                <View style={styles.entry}>
                    <Text style={{margin: 20}}>Description: {this.props.desc}</Text>
                    {/* <TextInput  style={ styles.input1 } onChangeText={this.updateTitle} value={this.state.title}/>
                    <Text style={{ margin: 20}}>Add Description: </Text>
                    <TextInput  style={ styles.input2 } onChangeText={this.updateDesc} value={this.state.desc}/>
                    <View style={styles.controls}>
                        <TouchableOpacity onPress={() => {this.props.submit(details)}}>
                                <Text style={{fontSize: 40, margin: 30}}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.back}>
                                <Text style={{fontSize: 40, margin: 30}}>Back</Text>
                        </TouchableOpacity>
                    </View> */}
                        <TouchableOpacity onPress={this.props.back}>
                            <Text style={{fontSize: 40, margin: 30}}>Back</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 8
    },
    top: {
        marginTop: 10,
        flex: 1,
    },
    title: {
        fontSize: 23,
        textAlign: 'center'
    },
    entry: {
        flex: 8
    },
    input1: {
        height:30,
        width:300,
        margin: 10,
        borderColor: '#000',
        borderWidth: 1
    },
    input2: {
        height:90,
        width:300,
        margin: 10,
        borderColor: '#000',
        borderWidth: 1
    },
    controls: {
        flexDirection: 'row'
    }
})