import react from "react";

import './SignUIStyle.css';
import SignInput from "./SignInput";

function FirstContainer(props) {
    const { inputChange, selectChange } = props;

    return (
        <div>
            <div className="sign-containerTitle">이름</div>
            <div className="sign-container">
                <SignInput
                    onChange={inputChange}
                    placeholder="이름" />
                <select className="selectBox" onChange={selectChange} style={{color: "#6FA5EB"}}>
                    <option value="default" key="default">내국인</option>
                    <option value="other" key="other">외국인</option>
                </select>
            </div>
        </div>
    )
}

export default FirstContainer;