import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDIsplayName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [flash, setFlash] = useState("");

    return (
        <div>
            <div>{flash}</div>
            <form onSubmit={(e) => {
                if (confirmPassword !== password) {
                    setFlash("Error: Passwords don't match");
                    e.preventDefault();
                }
            }}>
                <label>Display Name</label>
                <input type="text" required />

                <label>Email</label>
                <input type="email" onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="Email" required />

                <label>Password</label>
                <input onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="Password" required />

                <label>Confirm Password</label>
                <input placeholder="Confirm Password" required />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;