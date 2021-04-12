import React, { Component } from 'react'
import Preview from "./Preview"
import Editor from "./Editor"

export default class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             view: true // true represents editor mode
        }
    }

    loadEditor = (e) => {
        this.setState({
            view: true
        })
    }

    loadPreview = (e) => {
        this.setState({
            view: false
        })
    }
    
    
    render() {

        return (
            <div>
                <button onClick={this.loadEditor}>Editor</button>
                <button onClick={this.loadPreview}>Preview</button>
                {this.state.view ? <Editor /> : <Preview />}
            </div>
        )
    }
}
