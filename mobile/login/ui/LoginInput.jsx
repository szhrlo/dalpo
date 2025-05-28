import React from "react";
import "./LoginUIStyle.css";

function LoginInput(props) {
    const { type, placeholder, onChange } = props;

    return (
        <div className='inputContainer'>
            <input 
                className='inputStyle'
                onChange={onChange}
                placeholder={placeholder}
                type={type} />
        </div>
    );
}

export default LoginInput;