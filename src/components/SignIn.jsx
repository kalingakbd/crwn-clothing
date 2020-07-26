import React, {Component} from "react";
import FormInput from "./FormInput";

import './styles/SignIn.styles.scss';
import CustomButton from "./CustomButton";

class SignIn extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({"email" : '', "password" : ''});
    };

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name] : value}, () => {console.log(this.state)});
    };

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" ref="email" handleChange={this.handleChange} value={this.state.email} required label="Email"/>
                    <FormInput name="password" type="password" ref="password" handleChange={this.handleChange} value={this.state.password} required label="Password"/>
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
