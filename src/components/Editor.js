import React from 'react'
import Education from './Education'
import PersonalInfo from "./PersonalInfo"

function Editor(props) { // replace hardcoded placeholders with references to maps
    return (
        <div id="Preview">
            <p>Personal Information</p>
            <PersonalInfo personalInfo={props.personalInfo} handleChange={props.handleChange} />
            <p>Education</p>
            <Education education={props.education} handleChange={props.handleChange} />
        </div>
    )
}

export default Editor;