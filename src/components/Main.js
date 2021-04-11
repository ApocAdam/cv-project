import React, { Component } from 'react'
import Preview from "./Preview"

class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            buttonclicked : "false",
            Name: "",
            Phone: "",
            Email: "",
            Address: ""

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })        
    }

    render() {
        return (
            <div>
                <button>Preview</button>
                <div className="main">
                    <div>
                        <p>Personal Information</p>                        
                        <div className="personalInfo">
                            <input type="text" placeholder="Name" onChange={this.handleChange}></input>
                            <input type="text" placeholder="Phone" onChange={this.handleChange}></input>
                            <input type="text" placeholder="Email" onChange={this.handleChange}></input>
                            <input type="text" placeholder="Address" onChange={this.handleChange}></input>
                            <input type="text" placeholder="Github" onChange={this.handleChange}></input>
                            <input type="text" placeholder="Linkedin" onChange={this.handleChange}></input>
                        </div>
                        <p>Work Experience</p>
                        <p>Education</p>
                        <p>Skills</p>
                    </div>

                    <Preview 
                        Name={this.state.Name} 
                        Phone={this.state.Phone} 
                        Email={this.state.Email} 
                        Address={this.state.Address}
                        Github={this.state.Github}
                        Linkedin={this.state.Linkedin}
                    />
                </div>

            </div>

        )
    }
}

export default Main;
