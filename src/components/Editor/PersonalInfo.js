import React, { Component } from 'react'

class PersonalInfo extends Component {
    render() {
        return (
            <div>
                <div class="personalInfo">
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Phone"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Address"></input>
                    <input type="text" placeholder="Github"></input>
                    <input type="text" placeholder="Linkedin"></input>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;
