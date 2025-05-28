import React from "react";

const styles = {
    imgContainer: {
        height: 24,
        width: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}

function TopbarIcon(props) {
    const { name } = props;

    return (
        <div className="imgContainer">
            <img 
                src={`/images/icon/${name}.png`} 
                alt={`${name}`}
                className="topbarImg"
                onClick={() => console.log(`${name} 페이지로 이동`)}
            />
        </div>
    );
}

export default TopbarIcon;