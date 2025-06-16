import React from "react";

import "./LikeContent.css";

function LikeContentItem(props) {
    const { src, category, title, period } = props;

    function onClickContent() {
        // navigate(`/${title}`);
        console.log(`${title} 정보 페이지로 이동`);
    }

    return (
        <div className="content">
            <div className="content-imgContainer">
                <img src={`/images/poster/${src}.png`} alt={`${title}`} onClick={onClickContent}></img>
            </div>
            <div className="description">
                <div className="category-text">{category}</div>
                <div className="title-text" onClick={onClickContent}>{title}</div>
                <div className="period-text">{period}</div>
            </div>
        </div>
    )
}

export default LikeContentItem;