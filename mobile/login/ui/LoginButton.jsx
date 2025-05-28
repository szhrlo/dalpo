import React from "react";

const styles = {
    buttonContainer: {
        marginTop: '8%',
        marginBottom: '10px',
        backgroundColor: '#6FA5EB',
        borderRadius: 30,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: 13,
    },
}

function LoginButton(props) {
    const { title, onClick } = props;

    return(
        <div style={styles.buttonContainer}>
            <button style={styles.buttonStyle} onClick={onClick}>{title || '확인'}</button>
        </div>
    );
}

export default LoginButton;