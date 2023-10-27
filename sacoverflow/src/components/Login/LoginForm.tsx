'use client';

import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';

function LoginForm() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form action="" method="post" id="login-form">
            <InputComponent
                label="email"
                labelText="Email address / Username"
                type="email"
                id="email"
                pattern="^(?=.{3,50}$)([a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}|[a-zA-Z][a-zA-Z0-9_\.]{2,19})$"
                placeholder="Enter Email / Username"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
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

            <div className="flex justify-end md:justify-center">
                {/* <!-- forgot password right side --> */}
                <a href="#" id="forgot-password">
                    Recover Password
                </a>
            </div>

            {/* <!-- btn for login --> */}
            <div className="">
                <button type="submit" id="login-btn" className="">
                    Login
                </button>
            </div>
        </form>
    );
}

export default LoginForm;
