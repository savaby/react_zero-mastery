import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = () => {
    const dispatch = useDispatch()


    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async event => {
        event.preventDefault()
        // Can be distracted in func def
        // const { emailSignInStart } = props

        dispatch(emailSignInStart({ email, password }))

    }

    // More common way, for state as object, and multiple form's element
    const handleChange = (event) => {
        const { value, name } = event.target
        setCredentials({ ...userCredentials, [name]: value })
    }

    // Can be distracted in func def
    // const { googleSignInStart } = props

    const { email, password } = userCredentials
    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type="email" value={email} onChange={handleChange} label='Email' required />
                <FormInput name='password' type="password" value={password} onChange={handleChange} label='Password' required />
                <ButtonsContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>Sign in with Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn