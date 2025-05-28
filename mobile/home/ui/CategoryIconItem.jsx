import React from "react";

import "./HomeUIStyle.css";

function CategoryIconItem(props) {
    const { title, name } = props;

    function onClickIcon() {
        // navigate(`/${title}`);
        console.log(`${title} 페이지로 이동`);
    }

    return (
        <div className="iconContainer">
            <img src={`/images/icon/${title}.png`} alt={`${title}`} className="iconImg" onClick={onClickIcon}></img>
            <div className="iconText" onClick={onClickIcon}>{name}</div>
        </div>
    );
}

export default CategoryIconItem;