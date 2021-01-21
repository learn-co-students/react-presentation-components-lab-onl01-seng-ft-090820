import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        let moodChange = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: moodChange
        })
    }
    
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;