import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        if (confirmPassword !== password) {
            alert("Passwords do not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
        } catch (exception) {
            if (exception.code === 'auth/email-already-in-use') {
                alert("Email in use")
            } else {
                console.error("an error occured", exception);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <form onSubmit={handleOnSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;