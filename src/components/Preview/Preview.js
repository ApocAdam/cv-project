import React from 'react'
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationPreview from "./EducationPreview"

function Preview(props) {

    function test2() {
        let a = []
        for (let i = 0; i < props.education.length; i++) {
            a.push(<EducationPreview key={i} educationNumber={i} education={props.education[i]} />)
        }
        return a;
    }

    return (
        <div id="Preview">
            <PersonalInfoPreview personalInfo={props.personalInfo} />
            {test2()}
        </div>
    )
}

export default Preview