import {React, Component} from 'react'
export class Contact extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            contactNo: ''
        }
    }

    onChange = (event) => {
        if(event.target.name === 'name'){
            this.setState({
                name: event.value
            })
            console.log(this.state.name)
        }
        else{
            this.setState({
                contactNo: event.value
            })
            console.log(this.state.contactNo)
        }
    }
    onSubmit = () => {
        if(this.state.name==='' || !this.state.contactNo===''){
            alert('Empty Field')
        }
        else{
            alert("Form submitted successfully")
        }
    }

    render(){
    return <div className="ContactUS">
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5958239741576!2d77.60953671482159!3d12.933678790880823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151947c69de7%3A0xf2b320fefa7ffb8c!2sMountBlue%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1651477763795!5m2!1sen!2sin"></iframe></div>
    <div>
    <div>
    <h2>Contact</h2>
    <form onSubmit={this.onSubmit}>
    <label className="Fields">Name: 
    <input className="Fields" type="text" name="name" value={this.state.name} onChange={this.onChange}></input>
    </label>
    <label className="Fields">Contact No.: 
    <input className="Fields" type="text" name="contactNo" value={this.state.contactNo} onChange={this.onChange}></input>
    </label>
    <button>Contact Us</button>
    </form>
    </div>
    </div>
    </div>
}
}
