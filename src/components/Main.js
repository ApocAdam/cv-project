import React, { Component } from 'react'
import Preview from "./Preview/Preview"
import Editor from "./Editor/Editor"

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
            Major: 3,
            From: 4,
            To: 5
        }
    
        this.state = {
             view: true, // true represents editor mode
             personalInfo: ["", "", "", "", "" , ""],
             education: [["", "", "", "", "" , ""]],
             educationCount: 1
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
            const piCopy = this.state.personalInfo.slice()
            piCopy[this.personalInfoMap[e.target.placeholder]] = e.target.value
            this.setState({
                personalInfo: piCopy
            })
        }
        if (e.target.dataset.type === "education") {
            const educopy = this.state.education.slice()
            educopy[parseInt(e.target.dataset.educationnumber)][this.educationMap[e.target.placeholder]] = e.target.value
            this.setState({
                education: educopy
            })
        }
    }

    addEducation = () => {
        const educopy = this.state.education.slice()
        const newEducation = ["", "", "", "", "" , ""]
        educopy.push(newEducation)
        this.setState({
            education: educopy
        })
    }
    
    render() {

        return (
            <div>
                <button onClick={this.loadEditor}>Editor</button>
                <button onClick={this.loadPreview}>Preview</button>
                {this.state.view ? <div><Editor personalInfo={this.state.personalInfo} education={this.state.education} handleChange={this.handleChange}/><button onClick={this.addEducation}>Add</button></div> : <Preview personalInfo={this.state.personalInfo} education={this.state.education}/>}
            </div>
        )
    }
}
