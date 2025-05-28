import React, { useState } from "react";

import LoginInput from "./ui/LoginInput";
import AutoLogin from "./ui/AutoLogin";
import LoginButton from "./ui/LoginButton";

function LoginForm(props) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [isChecked, setChecked] = useState(false);
    
    const handleChangeId = (event) => {
        setId(event.target.value);
        console.log(event.target.value);
    }
    
    const handleChangePw = (event) => {
        setPw(event.target.value);
        console.log(event.target.value);
    }

    const handleAutoLogin = (event) => {
        setChecked(!isChecked);
        console.log(event.target.checked);
    }
    
    const handleSubmit = (event) => {
        alert(`아이디: ${id}, 비밀번호: ${pw}, 자동로그인: ${isChecked}`);
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <LoginInput
                onChange = {handleChangeId}
                placeholder = '아이디'
                type = 'id'
            />
            <LoginInput
                onChange = {handleChangePw}
                placeholder = '비밀번호'
                type = 'password'
            />
            <AutoLogin
                onChange = {handleAutoLogin}
            />
            <LoginButton
                title = '로그인'
                onClick = {() => {
                    console.log('로그인 클릭')
                }}
            />
        </form>
    );
}

export default LoginForm;