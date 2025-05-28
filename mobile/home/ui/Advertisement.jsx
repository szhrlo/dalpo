import React from "react";

const styles = {
    adContainer: {
        marginTop: 10,
        marginBottom: 20,
        padding: 4,
        width: "-webkit-fill-available",
        // aspectRatio: "39 / 14", // 비율 설정 -> 너비에 맞게 높이 설정
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
    },
    adImg: {
        width: "100%",
        height: "100%",
    },
    adText: {
        backgroundColor: "#44474B",
        color: "white",
        position: "absolute",
        right: "4%",
        bottom: "8%",
        padding: "0.4% 2%",
        fontSize: 6,
        borderRadius: 10,
        opacity: "70%",
    },
}

function Advertisement(props) {
    return (
        <div style={styles.adContainer}>
            <img src="/images/advertisement/1.png" alt="광고" style={styles.adImg}></img>
            <div style={styles.adText}>
                1 / 3
            </div>
        </div>
    );
}

export default Advertisement;