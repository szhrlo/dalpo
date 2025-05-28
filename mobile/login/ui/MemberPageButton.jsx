import React, { useState } from "react";


function MemberPageButton(props) {
    const { title } = props;
    const [ isHovered, setIsHovered ] = useState(false);

    return(
        <span
            style={{ cursor: isHovered ? 'pointer' : 'default' }}
            onClick = {() => {
                (title === '|') || console.log(`${title} 페이지로 이동`)
            }}
            onMouseEnter = {() => {
                (title === '|') || setIsHovered(true)
            }}
            onMouseLeave = {() => { setIsHovered(false) }}
        >
            {title}
        </span>
    );
}

export default MemberPageButton;