import React from 'react'
import EducationEditor from './EducationEditor'
import PersonalInfoEditor from "./PersonalInfo"

function Editor(props) {

    function educationEditorFactory() {
        let educationEditors = []
        for (let i = 0; i < props.education.length; i++) {
            educationEditors.push(<EducationEditor key={i} educationNumber={i} education={props.education[i]} handleChange={props.handleChange} addEducation={props.handleAdd}/>)
        }
        return educationEditors;
    }

    return (
        <div id="Preview">
            <PersonalInfoEditor personalInfo={props.personalInfo} handleChange={props.handleChange} />
            {educationEditorFactory()}
        </div>
    )
}

export default Editor;