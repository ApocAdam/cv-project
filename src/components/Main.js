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

        this.workMap = {
            Company: 0,
            Location: 1,
            Position: 2,
            From: 3,
            To: 4
        }
    
        this.state = {
             view: true, // true represents editor mode
             personalInfo: ["", "", "", "", "" , ""],
             education: [],
             work: []
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

    handleChange = (e) => { //use switch?, replace consts, potentially condense code?
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
        if (e.target.dataset.type === "work") {
            let workCopy = this.state.work.slice()
            workCopy[parseInt(e.target.dataset.worknumber)][this.workMap[e.target.placeholder]] = e.target.value
            this.setState({
                work: workCopy
            })
        }
    }

    addEducation = () => {
        let educopy = this.state.education.slice()
        const newEducation = ["", "", "", "", "" , ""]
        educopy.push(newEducation)
        this.setState({
            education: educopy
        })
    }

    deleteEducation = (e) => {
        if (e.target.dataset.type === "education") {
            let eduCopy = this.state.education
            eduCopy.splice(e.target.dataset.educationnumber, 1)
            this.setState({
                education: eduCopy
            })
        }
    }

    addWork = () => {
        let workCopy = this.state.work.slice()
        const newWork = ["", "", "", "", ""]
        workCopy.push(newWork)
        this.setState({
            work: workCopy
        })
    }

    deleteWork = (e) => {
        if (e.target.dataset.type === "work") {
            let workCopy = this.state.work
            workCopy.splice(e.target.dataset.worknumber, 1)
            this.setState({
                work: workCopy
            })
        }
    }

    render() {

        return (
            <div className="mainColour">
                <div className="test">
                    <button onClick={this.loadEditor}>Editor</button>
                    <button onClick={this.loadPreview}>Preview</button>
                </div>
                {this.state.view ? <div><Editor personalInfo={this.state.personalInfo} education={this.state.education} work={this.state.work} deleteEducation={this.deleteEducation} addEducation={this.addEducation} deleteWork={this.deleteWork} addWork={this.addWork} handleChange={this.handleChange}/></div> : <Preview personalInfo={this.state.personalInfo} education={this.state.education} work={this.state.work}/>}
            </div>
        )
    }
}
