import react from "react";

import './SignUIStyle.css';

function SignInput(props) {
    const { placeholder, onChange, onInput, length } = props;

    return (
        <input 
            onChange={onChange}
            placeholder={placeholder}
            type='text'
            onInput={onInput}
            maxLength={length}
            minLength={length} />
    )
}

export default SignInput;