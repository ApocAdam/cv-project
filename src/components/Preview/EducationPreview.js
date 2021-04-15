import React from 'react'

function EducationPreview(props) {
    return (
        <div className="margin">
            <div className="floatLeft">{props.education[0]}</div>
            <div className="floatRight">{props.education[1]}</div>
            <br></br>
            <div className="floatLeft">{props.education[2]}</div>
            <div className="floatRight">{props.education[3]}</div >
            <br></br>
            <div className="floatRight">{props.education[4]}-{props.education[5]}</div >
            <br></br>
            <br></br>
        </div>
    )
}

export default EducationPreview;
