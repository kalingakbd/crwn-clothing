import React, {Component} from "react";
import FormInput from "./FormInput";

import './styles/SignUp.styles.scss';
import CustomButton from "./CustomButton";
import { auth, createUser } from '../firebase/firebase.utils';

class SignUp extends Component{

    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const  {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords dont match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUser(user, {displayName});

            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        } catch (e){
            console.log("Error in creating user!")
        }
    };

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name] : value}, () => {console.log(this.state)});
    };


    render(){
        const  {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={displayName}
                        required
                        label='Display Name'/>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        required
                        label='Email'/>
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={password}
                        required
                        label='Password'/>
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        required
                        label='Confirm Password'/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
