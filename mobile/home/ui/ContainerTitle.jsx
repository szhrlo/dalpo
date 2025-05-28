import React from "react";

function ContainerTitle(props) {
    const { title } = props;

    return (
        <div className="containerTitle">
            <span style={{fontSize: "12px", color: "#44474B"}}>{title}</span>
            <span style={{fontSize: "8px", color: "#6FA5EB"}}>전체 보기</span>
        </div>
    );
}

export default ContainerTitle;