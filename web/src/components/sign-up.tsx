import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validSubmit, setValidSubmit] = useState('');

    const navigate = useNavigate();

    const submitForm = async () => {
        if (email && password) {
            try {
                await axios.post(
                    `${import.meta.env.VITE_SERVER_URL}/api/user`,
                    {
                        email,
                        password,
                    },

                );
                navigate('/');
            } catch (error) {
                console.error('Error submitting form:', error);
                setValidSubmit('error');
            }
        } else {
            setValidSubmit('error');
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="qr-code-form">
            <h1 className="header">Sign Up</h1>
            {validSubmit === 'error' && (
                <p className="error-msg">Please fill in the required areas correctly</p>
            )}

            <div className="form-form">
                <div className="input-section">
                    <label className="input-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input-fields"
                        id="email"
                        type="text"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="input-section">
                    <label className="input-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input-fields"
                        id="password"
                        type="password"
                        placeholder="*******"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <div className="submit-button-container">
                    <div className="submit-link">
                        <button className="submit-button" onClick={submitForm}>
                            Submit!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
