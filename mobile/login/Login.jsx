import React, { useState } from "react";

import "./Login.css";
import OtherLoginButton from "./ui/OtherLoginButton";
import MemberPageButton from "./ui/MemberPageButton";
import LoginForm from "./LoginForm";


function Login(props) {
    return(
        <div style={{height: "100vh", display: "flex", alignItems: "center"}}>
            <div className="wrapper">
                <div className="logoContainer">
                    <img src="images/logo.png" alt="logo" style={{width: '100%'}}></img>
                </div>
                <div className="titleContainer">로그인</div>
                <div className="formContainer">
                    <LoginForm />
                    <div className="memberPageContainer">
                        <MemberPageButton title = '회원가입' />
                        <MemberPageButton title = '|' />
                        <MemberPageButton title = '아이디 찾기' />
                        <MemberPageButton title = '|' />
                        <MemberPageButton title = '비밀번호 찾기' />
                    </div>
                    <div className="otherLoginContainer">
                        <div className="otherLoginText">
                            계정연결 로그인
                        </div>
                        <div className="otherLoginBoxContainer">
                            <OtherLoginButton
                                title = 'google'
                                name = '구글'
                            />
                            <OtherLoginButton
                                title = 'naver'
                                name = '네이버'
                            />
                            <OtherLoginButton
                                title = 'kakaotalk'
                                name = '카카오톡'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;