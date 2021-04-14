import React from 'react'
import EducationEditor from './EducationEditor'
import PersonalInfoEditor from "./PersonalInfoEditor"
import WorkEditor from './WorkEditor'

function Editor(props) {

    function educationEditorFactory() {
        let educationEditors = []
        for (let i = 0; i < props.education.length; i++) {
            educationEditors.push(<EducationEditor key={i} educationNumber={i} education={props.education[i]} delete={props.deleteEducation} handleChange={props.handleChange}/>)
        }
        return educationEditors;
    }

    function workEditorFactory() {
        let workEditors = []
        for (let i = 0; i < props.work.length; i++) {
            workEditors.push(<WorkEditor key={i} workNumber={i} work={props.work[i]} delete={props.deleteWork} handleChange={props.handleChange}/>)
        }
        return workEditors;
    }

    return (
        <div id="Preview">
            <PersonalInfoEditor personalInfo={props.personalInfo} handleChange={props.handleChange} />
            <p>Education</p>
            {educationEditorFactory()}
            <button onClick={props.addEducation}>Add</button>
            <p>Work</p>
            {workEditorFactory()}
            <button onClick={props.addWork}>Add</button>
        </div>
    )
}

export default Editor;