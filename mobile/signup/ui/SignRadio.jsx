import react from "react";

function SignRadio(props) {
    const { name, value, onChange, title } = props;

    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
            />
            <span>{title}</span>
        </label>
    )
}

export default SignRadio;