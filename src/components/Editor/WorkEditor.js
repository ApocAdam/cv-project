import React from 'react'

function WorkEditor(props) {
    return (
        <div>
            <input type="text" data-worknumber={props.workNumber} data-type="work" placeholder="Company" value={props.work[0]} onChange={props.handleChange}></input>
            <input type="text" data-worknumber={props.workNumber} data-type="work" placeholder="Position" value={props.work[1]} onChange={props.handleChange}></input>
            <input type="text" data-worknumber={props.workNumber} data-type="work" placeholder="Location" value={props.work[2]} onChange={props.handleChange}></input>
            <input type="text" data-worknumber={props.workNumber} data-type="work" placeholder="From" value={props.work[3]} onChange={props.handleChange}></input>
            <input type="text" data-worknumber={props.workNumber} data-type="work" placeholder="To" value={props.work[4]} onChange={props.handleChange}></input>
            <br></br>
            <button data-worknumber={props.workNumber} data-type="work" onClick={props.delete}>Delete</button>
            <p></p>
        </div>
    )
}

export default WorkEditor