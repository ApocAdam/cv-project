import React from 'react'

function EducationEditor(props) {
    return (
        <div className="fieldStyling">
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="University" value={props.education[0]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="Location" value={props.education[1]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="Degree" value={props.education[2]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="Major" value={props.education[3]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="From" value={props.education[4]} onChange={props.handleChange}></input>
            <input type="text" data-educationnumber={props.educationNumber} data-type="education" placeholder="To" value={props.education[5]} onChange={props.handleChange}></input>
            <button data-educationnumber={props.educationNumber} data-type="education" onClick={props.delete}>Delete</button>
            <p></p>
        </div>
    )
}

export default EducationEditor