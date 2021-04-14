import React from 'react'

function WorkPreview(props) {
    return (
        <div>
            <ul>
                <li data-worknumber={props.workNumber}>University: {props.work[0]}</li>
                <li data-worknumber={props.workNumber}>Location: {props.work[1]}</li>
                <li data-worknumber={props.workNumber}>Degree: {props.work[2]}</li>
                <li data-worknumber={props.workNumber}>Major: {props.work[3]}</li>
                <li data-worknumber={props.workNumber}>From: {props.work[4]}</li>
                <li data-worknumber={props.workNumber}>To: {props.work[5]}</li>
            </ul>
        </div>
    )
}

export default WorkPreview;
