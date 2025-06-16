import react from "react";

import "./Like.css";
import LikeContent from "./ui/LikeContent";

function Like(props) {
    return (
        <div className="wrapper">
            <div className="title-container">
                <div className="img-container"><img src="/images/icon/like.png"></img></div>
                <span>관심 컨텐츠</span>
            </div>
            <LikeContent />
        </div>
    )
}

export default Like;