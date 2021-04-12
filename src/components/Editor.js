import React from 'react'

function Editor(props) {
    return (
        <div id="Preview">
            <p>Editor</p>
            <input type="text" placeholder="Name" value={props.personalInfo[0]} onChange={props.handlePersonalChange}></input>
            <input type="text" placeholder="Phone" value={props.personalInfo[1]} onChange={props.handlePersonalChange}></input>
            <input type="text" placeholder="Address" value={props.personalInfo[2]} onChange={props.handlePersonalChange}></input>
            <input type="text" placeholder="Email" value={props.personalInfo[3]} onChange={props.handlePersonalChange}></input>
            <input type="text" placeholder="Github" value={props.personalInfo[4]} onChange={props.handlePersonalChange}></input>
            <input type="text" placeholder="Linkedin" value={props.personalInfo[5]} onChange={props.handlePersonalChange}></input>

        </div>
    )
}

export default Editor;