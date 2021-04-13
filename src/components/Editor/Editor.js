import React from 'react'
import EducationEditor from './EducationEditor'
import PersonalInfoEditor from "./PersonalInfo"

function Editor(props) {

    function educationEditorFactory() {
        let educationEditors = []
        for (let i = 0; i < props.education.length; i++) {
            educationEditors.push(<EducationEditor key={i} educationNumber={i} education={props.education[i]} delete={props.delete} handleChange={props.handleChange}/>)
        }
        return educationEditors;
    }

    return (
        <div id="Preview">
            <PersonalInfoEditor personalInfo={props.personalInfo} handleChange={props.handleChange} />
            <p>Education</p>
            {educationEditorFactory()}
        </div>
    )
}

export default Editor;