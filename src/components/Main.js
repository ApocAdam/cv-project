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

        this.educationMap = {
            University: 0,
            Location: 1,
            Degree: 2,
            Subject: 3,
            From: 4,
            To: 5
        }
    
        this.state = {
             view: true, // true represents editor mode
             personalInfo: ["", "", "", "", "" , ""],
             education: ["", "", "", "", "" , ""]
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

    handleChange = (e) => {
        if (e.target.dataset.type === "personalInfo") {
            const newPI = this.state.personalInfo.slice()
            newPI[this.personalInfoMap[e.target.placeholder]] = e.target.value
            this.setState({
                personalInfo: newPI
            })
        }
        if (e.target.dataset.type === "education") {
            const educopy = this.state.education.slice()
            educopy[this.educationMap[e.target.placeholder]] = e.target.value
            this.setState({
                education: educopy
            })
        }
    }

    
    
    render() {

        return (
            <div>
                <button onClick={this.loadEditor}>Editor</button>
                <button onClick={this.loadPreview}>Preview</button>
                {this.state.view ? <Editor personalInfo={this.state.personalInfo} education={this.state.education} handleChange={this.handleChange}/> : <Preview personalInfo={this.state.personalInfo} education={this.state.education}/>}
            </div>
        )
    }
}
