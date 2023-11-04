'use client';

import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';

function SignUpForm() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <form action="" method="post" id="login-form">
            <InputComponent
                label="firstName"
                labelText="First Name"
                type=""
                id="firstName"
                pattern=""
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
            />
            <InputComponent
                label="lastName"
                labelText="Last Name"
                type=""
                id="lastName"
                pattern=""
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
            />
            <InputComponent
                label="email"
                labelText="Email address"
                type="email"
                id="email"
                pattern="^(?=.{3,50}$)([a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}|[a-zA-Z][a-zA-Z0-9_\.]{2,19})$"
                placeholder="Enter Email"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                required={true}
            />
            <InputComponent
                label="Username"
                labelText="Username"
                type=""
                id=""
                pattern="^(?=.{3,50}$)([a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}|[a-zA-Z][a-zA-Z0-9_\.]{2,19})$"
                placeholder="Enter Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required={true}
            />
            <InputComponent
                label="password"
                labelText="Password"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
            />

            <InputComponent
                label="password"
                labelText="Confirm Password"
                type="password"
                id="confirmPassword"
                placeholder="Enter Password Again"
                value={confirmPassword==password?confirmPassword: password}
                onChange={(e) =>  setConfirmPassword( e.target.value)}
                required={true}
            />

           

            {/* <!-- btn for login --> */}
            <div  className="">
                <button type="submit" id="login-btn" className="">
                    Sign Up
                </button>
            </div>
        </form>
    );
    
}

export default SignUpForm;
