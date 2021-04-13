import React from 'react'

function EducationPreview(props) {
    return (
        <div>
            <ul>
                <li data-educationnumber={props.educationNumber}>University: {props.education[0]}</li>
                <li data-educationnumber={props.educationNumber}>Location: {props.education[1]}</li>
                <li data-educationnumber={props.educationNumber}>Degree: {props.education[2]}</li>
                <li data-educationnumber={props.educationNumber}>Major: {props.education[3]}</li>
                <li data-educationnumber={props.educationNumber}>From: {props.education[4]}</li>
                <li data-educationnumber={props.educationNumber}>To: {props.education[5]}</li>
            </ul>
        </div>
    )
}

export default EducationPreview;
