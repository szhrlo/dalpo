import React, { useState } from "react";

import "./MyPage.css";
import MyPageTop from "./ui/MyPageTop";
import MyPageContent from "./ui/MyPageContent";
import Bottombar from "../Bottombar";

function MyPage(props) {
    return (
        <div>
            <MyPageTop />
            <div className="wrapper">
                <MyPageContent />
            </div>
            <Bottombar />
        </div>
    );
}

export default MyPage;