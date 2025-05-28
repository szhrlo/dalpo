import React from "react";

import "./Topbar.css";
import TopbarIcon from "./TopbarIcon";

const styles = {
    topbar: {
        width: "-webkit-fill-available",
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        height: 30,
        // backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}

function Topbar(props) {
    return (
        <div style={styles.topbar}>
            <span className="menuContainer">
                <TopbarIcon name='menu' />
            </span>
            <span className="menuContainer">
                <TopbarIcon name='alarm' />
                <TopbarIcon name='ticket' />
            </span>
        </div>
    );

}

export default Topbar;