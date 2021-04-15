import React from 'react'

function EducationPreview(props) {
    return (
        <div className="margin">
            <section  data-educationnumber={props.educationNumber}>{props.education[0]}</section >
            <section  data-educationnumber={props.educationNumber}>{props.education[1]}</section >
            <section  data-educationnumber={props.educationNumber}>{props.education[2]}</section >
            <section  data-educationnumber={props.educationNumber}>{props.education[3]}</section >
            <section  data-educationnumber={props.educationNumber}>{props.education[4]}</section >
            <section  data-educationnumber={props.educationNumber}>{props.education[5]}</section >
        </div>
    )
}

export default EducationPreview;
