import React from 'react'

function WorkPreview(props) {
    return (
        <div className="margin">
            <div className="floatLeft">{props.work[0]}</div>
            <div className="floatRight">{props.work[1]}</div>
            <br></br>
            <div className="floatLeft">{props.work[2]}</div>
            <div className="floatRight">{props.work[3]}-{props.work[4]}</div >
            <br></br>
            <br></br>
        </div>
    )
}

export default WorkPreview;
