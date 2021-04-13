import React from 'react'
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationPreview from "./EducationPreview"

function Preview(props) {

    function educationPreviewFactory() {
        let educationPreviews = []
        for (let i = 0; i < props.education.length; i++) {
            educationPreviews.push(<EducationPreview key={i} educationNumber={i} education={props.education[i]} />)
        }
        return educationPreviews;
    }
    //Make so that education is only rendered if there is one + preivew
    return (
        <div id="Preview">
            <PersonalInfoPreview personalInfo={props.personalInfo} />
            <p>Education</p>
            {educationPreviewFactory()}
        </div>
    )
}

export default Preview