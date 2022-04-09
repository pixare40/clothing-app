import { useState, useContext } from "react"
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import './login.styles.scss';
import { UserContext } from "../../contexts/user.context";

const defaultLoginInput = {
    password: '',
    email: ''
}

const Login = () => {

    const [loginFields, setLoginField] = useState(defaultLoginInput);

    const { email, password } = loginFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginField({ ...loginFields, [name]: value });
    }

    const logGoogleUser = async (event) => {
        event.preventDefault();
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const { setCurrentUser } = useContext(UserContext);

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserEmailAndPassword(email, password);
            setCurrentUser(user);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('user not found');
                    break;
                default:
                    console.log(error);
            }
            console.log("An error happened")
        }

    }

    return (
        <div className="login-container">
            <h2>I already have an account</h2>
            <h4>Sign in with your email and password</h4>
            <form onSubmit={handleOnSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    required
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    onChange={handleChange}
                    required
                    name="password"
                    type='password'
                    value={password}
                />
                <div className="login-button-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logGoogleUser}>Login In with Google</Button>
                </div>
            </form>

        </div>
    )
}

export default Login;