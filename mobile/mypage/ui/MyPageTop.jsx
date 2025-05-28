import React from "react";

const styles = {
    topbarContainer: {
        width: '-webkit-fill-available',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topbarLeftContainer: {
        width: 'fit-content',
    },
    topbarRightContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    iconConatainer: {
        width: '20px',
        height: '20px',
        textAlign: 'center',
        margin: '0 2px',
    }

}

function MyPageTop(props) {
    return (
        <div style={styles.topbarContainer}>
            <div style={styles.topbarLeftContainer}>
                <img src="images/logo.png" alt="logo" style={{width: '28px'}}></img>
            </div>
            <div style={styles.topbarRightContainer}>
                <div style={styles.iconConatainer}>
                    <img src="images/icon/like.png" alt="like" style={{width: '18px'}}></img>
                </div>
                <div style={styles.iconConatainer}>
                    <img src="images/icon/alarm.png" alt="alarm" style={{width: '14px'}}></img>
                </div>                
            </div>
        </div>
    );
}

export default MyPageTop;