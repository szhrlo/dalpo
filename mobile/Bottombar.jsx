import React from "react";

import "./Bottombar.css";
import BottombarIcon from "./BottombarIcon";

const styles = {
    bottombar: {
        width: "-webkit-fill-available",
        height: 40,
        // padding: 2,
        backgroundColor: "#F2F2F2",
        display: "flex",
        position: "fixed",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
}

function Bottombar(props) {
    return (
        <div style={styles.bottombar}>
            <BottombarIcon title="search" name="검색" />
            <BottombarIcon title="surround" name="내주변" />
            <BottombarIcon title="home" name="홈" />
            <BottombarIcon title="like" name="좋아요" />
            <BottombarIcon title="my" name="마이" />
        </div>
    );
}

export default Bottombar;