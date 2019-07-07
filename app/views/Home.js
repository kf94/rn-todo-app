import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../sections/Header';
import TaskList from '../sections/TaskList';
import AddEntry from '../sections/AddEntry';
import Details from '../sections/Details';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks:
                [
                    {title:'meal prep', desc:'prepare rice and vegetables and store in fridge'},
                    {title:'Gym', desc:'run on treadmil for 30 mintues, incline'},
                    {title:'Study', desc:'get react-native basics down!'}
                ],
            entry: false,
            details: false,
            inspecting: null
        }
    }

    toggleEntry = () => {
        this.setState((state) => {
            return {entry : !state.entry}
        })
    }

    toggleDetails = (i) => {
        this.setState((state) => {
            console.log(i);
            return {
                details : !state.details,
                inspecting: i
            }
        })
    }

    deleteEntry = (i) => {
        this.setState((state) => {
            state.tasks.splice(i,1);
            return state.tasks;
        });
    }

    addEntry = (entry) => {
        this.setState((state) => {
            console.log(entry,'!!!!');
            return {tasks: 
                [...state.tasks,
                entry
                ]};
        });
        
        this.toggleEntry();
    }

    render() {

        let content = <TaskList 
                            tasks={this.state.tasks} 
                            entry={this.toggleEntry} 
                            delete={(i) => this.deleteEntry(i)} 
                            inspect={(i) => this.toggleDetails(i)} 
                            back={this.toggleDetails}
                        />

        if (this.state.entry === true) {
            content = (
                <View style={styles.main}>
                    <AddEntry back={this.toggleEntry} submit={(entry) => {this.addEntry(entry)}} />
                </View>
            )
        }

        if (this.state.details === true) {
            content = (
                <View style={styles.main}>
                    <Details inspect={this.state.tasks[this.state.inspecting].title} desc={this.state.tasks[this.state.inspecting].desc} back={this.toggleDetails}/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Header />
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        flex: 8,
        backgroundColor: '#FFF'
    }
});