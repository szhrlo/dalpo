import React, { useState } from "react";

import "./Signup.css";
// import SignInput from "./ui/SignInput";
import FirstContainer from "./ui/FirstContainer";
import SecondContainer from "./ui/SecondContainer";
import ThirdContainer from "./ui/ThirdContainer";

function Signup(props) {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [nation, setNation] = useState("국적 선택");
    const [gender, setGender] = useState(null);
    const [phone, setPhone] = useState(null);
    const [number, setNumber] = useState("");
    const [certify, setCertify] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const handleBirth = (event) => {
        const onlyNums = event.target.value.replace(/\D/g, '')
        setBirth(onlyNums);
        console.log(onlyNums);
    }

    const handleNation = (event) => {
        setNation(event.target.value);
        console.log(event.target.value);
    };

    const handleGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    }

    const handlePhone = (event) => {
        setPhone(event.target.value);
        console.log(event.target.value);
    }

    const handleNumber = (event) => {
        setNumber(event.target.value);
        console.log(event.target.value);
    }

    const handleCertify = (event) => {
        setCertify(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="wrapper">
            <div className="titleContainer">
                <div className="title">본인인증</div>
            </div>
            <div className="signContainer">
                <FirstContainer
                    inputChange={handleName}
                    selectChange={handleNation} />
                <SecondContainer
                    inputChange={handleBirth}
                    selectChange={handleGender} />
                <ThirdContainer
                    selectChange={handlePhone}
                    numberChange={handleNumber}
                    certifyChange={handleCertify} />
            </div>
            <div className="submit">
                다음
            </div>
        </div>
    )
}

export default Signup;