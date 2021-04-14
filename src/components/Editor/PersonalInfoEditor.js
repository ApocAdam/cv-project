import React from 'react'

function PersonalInfoEditor(props) {
    return (
        <div>
            <p>Personal Information</p>
            <input type="text" data-type="personalInfo" placeholder="Name" value={props.personalInfo[0]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Phone" value={props.personalInfo[1]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Address" value={props.personalInfo[2]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Email" value={props.personalInfo[3]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Github" value={props.personalInfo[4]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Linkedin" value={props.personalInfo[5]} onChange={props.handleChange}></input>
        </div>
    )
}

export default PersonalInfoEditor