import React from "react";

import "./Bottombar.css";

function BottombarIcon(props) {
    const { title, name } = props;

    function onClickIcon() {
        // navigate(`/${title}`);
        console.log(`${title} 페이지로 이동`);
    }

    return (
        <div className="bottomIconContainer">
            <img 
                src={`/images/icon/${title}.png`} 
                alt={`${title}`} 
                onClick={onClickIcon}
            />
            <div onClick={onClickIcon}>{name}</div>
        </div>
    );
}

export default BottombarIcon;