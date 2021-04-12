import React, { Component } from 'react'
import Preview from "./Preview"
import Editor from "./Editor"

export default class Main extends Component {

    constructor(props) {
        super(props)

        this.personalInfoMap = {
            Name: 0,
            Phone: 1,             
            Address: 2,
            Email: 3,
            Github: 4,
            Linkedin: 5,
        }
    
        this.state = {
             view: true, // true represents editor mode
             personalInfo: ["", "", "", "", "" , ""]
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

    handlePersonalChange = (e) => {
        const newPI = this.state.personalInfo.slice()
        newPI[this.personalInfoMap[e.target.placeholder]] = e.target.value
        this.setState({
            personalInfo: newPI
        })
    }
    
    
    render() {

        return (
            <div>
                <button onClick={this.loadEditor}>Editor</button>
                <button onClick={this.loadPreview}>Preview</button>
                {this.state.view ? <Editor personalInfo={this.state.personalInfo} handlePersonalChange={this.handlePersonalChange}/> : <Preview personalInfo={this.state.personalInfo}/>}
            </div>
        )
    }
}
