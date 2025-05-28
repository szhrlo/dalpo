import React from "react";

import "./HomeUIStyle.css";

function PopularBox(props) {
    const { title, name } = props;

    function onClickBox() {
        // navigate(`/${title}`);
        console.log(`${title} 소개 페이지로 이동`);
    }

    return (
        <div className="popularBox">
            <div className="popularImg" onClick={onClickBox}>
                <img src={`/images/poster/${title}.png`} alt={`${title}`} style={{width: "100%"}}></img>
            </div>
            <div className="popularText" onClick={onClickBox}>
                {name}
            </div>
        </div>
    );
}

export default PopularBox;