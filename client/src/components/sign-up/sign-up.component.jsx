import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { useDispatch } from 'react-redux'

import { SignUpContainer, SignUpTitle } from './sign-up.styles'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = () => {

    const dispatch = useDispatch()
    const signUpStartHandler = userCredentials => dispatch(signUpStart(userCredentials))

    const [userDetails, setDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = userDetails
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        signUpStartHandler({ displayName, email, password })

    }

    const handleChange = event => {
        const { name, value } = event.target
        setDetails({ ...userDetails, [name]: value })
    }


    const { displayName, email, password, confirmPassword } = userDetails
    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and pasword</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Name' required />
                <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )

}

export default SignUp