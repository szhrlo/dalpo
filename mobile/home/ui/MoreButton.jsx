import React from "react";

import "./HomeUIStyle.css";

function MoreButton(props) {
    const { title, name } = props;

    return (
        <div 
            className="moreButton" 
            onClick={() => {
                // navigate(`/${title}`);
                console.log(`${title} 페이지로 이동`)
            }}
        >
            {name}
        </div>
    );
}

export default MoreButton;