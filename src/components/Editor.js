import React from 'react'

function Editor(props) { // replace hardcoded placeholders with references to maps
    return (
        <div id="Preview">
            <p>Personal Information</p>
            <input type="text" data-type="personalInfo" placeholder="Name" value={props.personalInfo[0]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Phone" value={props.personalInfo[1]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Address" value={props.personalInfo[2]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Email" value={props.personalInfo[3]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Github" value={props.personalInfo[4]} onChange={props.handleChange}></input>
            <input type="text" data-type="personalInfo" placeholder="Linkedin" value={props.personalInfo[5]} onChange={props.handleChange}></input>
            <p>Education</p>
            <input type="text" data-type="education" placeholder="University" value={props.education[0]} onChange={props.handleChange}></input>
            <input type="text" data-type="education" placeholder="Location" value={props.education[1]} onChange={props.handleChange}></input>
            <input type="text" data-type="education" placeholder="Degree" value={props.education[2]} onChange={props.handleChange}></input>
            <input type="text" data-type="education" placeholder="Major" value={props.education[3]} onChange={props.handleChange}></input>
            <input type="text" data-type="education" placeholder="From" value={props.education[4]} onChange={props.handleChange}></input>
            <input type="text" data-type="education" placeholder="To" value={props.education[5]} onChange={props.handleChange}></input>
        </div>
    )
}

export default Editor;