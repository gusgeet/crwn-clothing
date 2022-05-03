import { useState } from "react";

import { 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword } 
    from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles';
import { useNavigate } from "react-router-dom";



const defaultformFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultformFields)
    }

    
    const signInWithGoogle = async () =>{
        await signInWithGooglePopup();
        navigate("/");

    }   

    const handleSubmit = async (event)  => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email, 
                password);
            
            resetFormFields();
            
        } catch (error) {
            switch (error.code){
                case 'auth/wrong-password':
                    alert('incorrect password or email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.log(error.code)
            }
        }

        

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value })
    }

    

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}/>
                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}/>
                <ButtonsContainer>
                    <Button type="submit">Sign in</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle} >Sign in with Google</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm