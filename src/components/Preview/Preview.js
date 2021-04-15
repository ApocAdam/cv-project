import React from 'react'
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationPreview from "./EducationPreview"
import WorkPreview from './WorkPreview'

function Preview(props) {

    function educationPreviewFactory() {
        let educationPreviews = []
        for (let i = 0; i < props.education.length; i++) {
            educationPreviews.push(<EducationPreview key={i} educationNumber={i} education={props.education[i]} />)
        }
        return educationPreviews;
    }

    function workPreviewFactory() {
        let workPreviews = []
        for (let i = 0; i < props.work.length; i++) {
            workPreviews.push(<WorkPreview key={i} workNumber={i} work={props.work[i]} />)
        }
        return workPreviews;
    }
    
    return (
        <div className="preview">
            <PersonalInfoPreview personalInfo={props.personalInfo} />
            {props.education.length > 0 && <p className="educationHeader">Education</p>}
            {educationPreviewFactory()}
            {props.work.length > 0 && <p className="workHeader">Professional Experience</p>}
            {workPreviewFactory()}
        </div>
    )
}

export default Preview