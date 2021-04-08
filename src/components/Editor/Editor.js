import React, { Component } from 'react'
import PersonalInfo from "./PersonalInfo"

class Editor extends Component {
    render() {
        return (
            <div>
                <p>Personal Information</p>
                <div>
                <PersonalInfo />
                </div>
                <p>Work Experience</p>
                <p>Education</p>
                <p>Skills</p>
            </div>

        )
    }
}

export default Editor;
