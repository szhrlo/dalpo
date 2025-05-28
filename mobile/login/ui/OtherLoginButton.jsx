import React from "react";

const styles = {
    otherLoginBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 10,
        color: '#4C4C4C',
        margin: '0 10%',
    },
    otherLoginImg: {
        width: 40,
        height: 40,
        backgroundColor: '#F2F2F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 4,
    },
}

function OtherLoginButton(props) {
    const { title, name } = props;

    return (
        <div style={styles.otherLoginBox}>
            <div 
                style={styles.otherLoginImg}
                onClick={() => {
                    // `/page/otherLogin/${title}`
                    console.log(`${title} 페이지로 이동`);
                }}
            >
                <img src={`images/${title}.png`} alt={`${title}`} style={{width: '60%'}} />
            </div>
            {name}
        </div>
    );
}

export default OtherLoginButton;