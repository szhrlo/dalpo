import react from "react";

import './SignUIStyle.css';
import SignInput from "./SignInput";
import SignRadio from "./SignRadio";

function SecondContainer(props) {
    const { inputChange, selectChange } = props;

    return (
        <div>
            <div className="sign-containerTitle">생년월일</div>
            <div className="sign-container">
                <SignInput
                    onChange={inputChange}
                    placeholder="ex)19991108"
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // 숫자만 입력 가능
                    }}
                    length={8} />
                <div className="selectBox" style={{color: "#838383"}}>
                    <SignRadio
                        name="gender"
                        value="m"
                        onChange={selectChange}
                        title="남" />
                    <span style={{color: '#4C4C4C', fontSize: '14px'}}> | </span>
                    <SignRadio
                        name="gender"
                        value="w"
                        onChange={selectChange}
                        title="여" />
                </div>
            </div>
        </div>
    )
}

export default SecondContainer;