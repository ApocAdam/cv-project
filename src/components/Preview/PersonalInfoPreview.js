import React from 'react'

function PersonalInfoPreview(props) {
    return (
        <div>
            <h1 className="name">{props.personalInfo[0]}</h1>
            <section className="phone">{props.personalInfo[1]}</section>
            <section className="address">{props.personalInfo[2]}</section>
            <section className="email">{props.personalInfo[3]}</section>
            <section className="github">{props.personalInfo[4]}</section>
            <section className="linkedin">{props.personalInfo[5]}</section>
        </div>
    )
}

export default PersonalInfoPreview