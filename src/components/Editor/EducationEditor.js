import React from 'react'

function EducationEditor(props) {
    return (
        <div>
            <p>Education</p>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="University" value={props.education[0]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="Location" value={props.education[1]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="Degree" value={props.education[2]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="Major" value={props.education[3]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="From" value={props.education[4]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="To" value={props.education[5]} onChange={props.handleChange}></input>
            <br></br>
            <button onClick={props.addEducation}>Add</button>
        </div>
    )
}

export default EducationEditor