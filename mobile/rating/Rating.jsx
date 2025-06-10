import React from "react";

import "./Rating.css";
import RatingContent from "./ui/RatingContent";
import Bottombar from "../Bottombar";
import RatingTop from "./ui/RatingTop";

function Rating(props){
    return (
        <div>
            <RatingTop />
            <div className="wrapper">
                <div className="title">등급보기</div>
                <RatingContent />
            </div>
            <Bottombar />
        </div>
    );
}

export default Rating;