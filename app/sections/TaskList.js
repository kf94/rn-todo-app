import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default class TaskList extends Component {
    render() {
        const tasks = this.props.tasks.map((cur, i) => {
            return (
                <View key={cur.title + i} style={{height: 40, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                    <Text style={{fontSize:18}}>{i + 1}. {cur.title}</Text>
                    <TouchableOpacity style={{ backgroundColor: '#00F',padding: 5, borderRadius:15 }} onPress={() => {this.props.inspect(i)}}>
                        <Text style={{color: '#FFF',fontSize:18}}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F00',padding: 5, borderRadius:15 }} onPress={() => {this.props.delete(i)}}>
                        <Text style={{fontSize:18, borderRadius: 5}}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <View style={styles.main}>
                <View style={styles.top}>
                    <View style={styles.heading}>
                        <Text style={styles.title}>
                            Your Tasks
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this.props.entry} style={styles.add}>
                        <Text style={styles.addText}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.list}>
                    {tasks}
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    main: {
        flex: 8,
        backgroundColor: '#FFF'
    },
    top: {
        marginTop: 10,
        flexDirection: 'row',
        flex: 1
    },
    heading: {
        flex: 3,
        marginLeft: 20,
    },
    add: {
        flex: 1,
        backgroundColor: '#5F5',
        borderRadius:10,
        marginBottom: 50,
        marginRight: 20,
        paddingLeft: 20
    },
    list: {
        flex: 6
    },
    title: {
        fontSize: 23
    },
    addText: {
        fontSize: 23
    }
});