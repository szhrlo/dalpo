import React from "react";
import "./LoginUIStyle.css";

function AutoLogin(props) {
    const { onChange } = props;

    return (
        <div className="autoLoginContainer">
            <input type="checkbox" className="checkboxStyle" onChange={onChange} />
            <label className="checkboxText">자동로그인</label>
        </div>
    );
}

export default AutoLogin;