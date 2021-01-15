// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }

    }

    handleClick = event => {
        console.log('inside handleClick')
        let newMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({ 
            mood: newMood
        })
    }


    render() {
        return (
            <div onClick = {this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}
