import react from "react";

import './SignUIStyle.css';
import SignInput from "./SignInput";
import SignRadio from "./SignRadio";

function ThirdContainer(props) {
    const { numberChange, certifyChange, selectChange } = props;

    return (
        <div style={{marginTop: '24px'}}>
            <div className="sign-containerTitle">휴대폰 본인인증</div>
            <div className="sign-container" style={{marginTop: "10px", marginBottom: "14px"}}>
                <SignRadio
                        name="phone"
                        value="1"
                        onChange={selectChange}
                        title="SKT" />
                <SignRadio
                        name="phone"
                        value="2"
                        onChange={selectChange}
                        title="KT" />
                <SignRadio
                        name="phone"
                        value="3"
                        onChange={selectChange}
                        title="LG U+" />
                <SignRadio
                        name="phone"
                        value="4"
                        onChange={selectChange}
                        title="알뜰폰" />                        
            </div>
            <div className="sign-container">
                <SignInput
                    onChange={numberChange}
                    placeholder="휴대폰 번호를 입력하세요"
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // 숫자만 입력 가능
                    }}
                    length={11} />
                <div className="numberBtn">인증요청</div>
            </div>
            <div style={{marginTop: "10px"}}>
                <SignInput
                    onChange={certifyChange}
                    placeholder="인증번호 입력"
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // 숫자만 입력 가능
                    }}
                    length={6} />
            </div>
        </div>
    )
}

export default ThirdContainer;