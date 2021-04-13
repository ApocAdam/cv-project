import React from 'react'
import EducationEditor from './EducationEditor'
import PersonalInfoEditor from "./PersonalInfo"

function Editor(props) { // replace hardcoded placeholders with references to maps

    function test() {
        let a = []
        for (let i = 0; i < props.education.length; i++) {
            a.push(<EducationEditor key={i} educationNumber={i} education={props.education[i]} handleChange={props.handleChange} addEducation={props.handleAdd}/>)
        }
        return a;
    }

    return (
        <div id="Preview">
            <PersonalInfoEditor personalInfo={props.personalInfo} handleChange={props.handleChange} />
            {test()}
        </div>
    )
}

export default Editor;