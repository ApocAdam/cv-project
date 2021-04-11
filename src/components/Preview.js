import React from 'react'

function Preview(props) {
    return (
        <div id="Preview">
            <p>Preview</p>
            Name: {props.Name} <br></br>
            Phone: {props.Phone} <br></br>
            Email: {props.Email} <br></br>
            Address: {props.Address} <br></br>
            Github: {props.Github} <br></br>
            Linkedin: {props.Linkedin}
        </div>
    )
}

export default Preview