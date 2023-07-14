import { useState } from "react";

import { 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword, 
    //getCategoriesAndDocuments,
    getUsersAndGetAdmin
    } 
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
        const res = await signInWithGooglePopup();
        navigate("/");
        if(res.user){
            let userAdmin = await getUsersAndGetAdmin(res.user.email)
        }
    }   

    const handleSubmit = async (event)  => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email, 
                password);
                
            navigate("/");
            resetFormFields();
                        

        } catch (error) {
            switch (error.code){
                case 'auth/wrong-password':
                    alert('incorrect password or email');
                    break
                case 'auth/user-not-found':
                    alert('no user has been found with those credentials');
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
            <h2>Ya tenes una cuenta?</h2>
            <span>Ingresá con tu usuario y password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Usuario"
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
                    <Button type="submit">Ingresar</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle} >Ingresar con Google</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm