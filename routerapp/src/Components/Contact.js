import {React, Component} from 'react'
export class Contact extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            contactNo: '',
            error: {
                message: '',
                type: ''
            }
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if(!this.state.name){
            this.setState({
                error: {
                    type: 'name',
                    message: "Missing Name Field!!"
                }
            })
        }
        else if(!this.state.contactNo){
            this.setState({
                error: {
                    type: 'contact',
                    message: "Missing Contacts Field!!"
                }
            })
        }
        else{
            this.setState({
                error: {
                    type: '',
                    message: ""
                }
            })

        }
    }

    render(){
    return <div className="ContactUS">
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5958239741576!2d77.60953671482159!3d12.933678790880823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151947c69de7%3A0xf2b320fefa7ffb8c!2sMountBlue%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1651477763795!5m2!1sen!2sin"></iframe></div>
    <div>
    <div className='ContactInfo'>
    <h2>Contact</h2>
    <form onSubmit={this.onSubmit}>
    <label className="Labels">Name: 
    <div className='InputWrapper'>
    <input className="Fields" type="text" name="name" value={this.state.name} onChange={this.onChange}></input></div>
    </label>
    <label className="Labels">Contact No.: 
    <div className='InputWrapper'>
    <input className="Fields" type="tel" name="contactNo" value={this.state.contactNo} onChange={this.onChange}></input></div>
    </label>
    <p className='error'>{this.state.error.message}</p>
    <br></br>
    <button>Contact Us</button>
    </form>
    </div>
    </div>
    </div>
}
}
