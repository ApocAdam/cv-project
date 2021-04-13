import React from 'react'

function PersonalInfoPreview(props) {
    return (
        <div>
            <p>Personal Information</p>
            <ul>
                <li>Name: {props.personalInfo[0]}</li>
                <li>Phone: {props.personalInfo[1]}</li>
                <li>Address: {props.personalInfo[2]}</li>
                <li>Email: {props.personalInfo[3]}</li>
                <li>Github: {props.personalInfo[4]}</li>
                <li>Linkedin: {props.personalInfo[5]}</li>
            </ul>
        </div>
    )
}

export default PersonalInfoPreview