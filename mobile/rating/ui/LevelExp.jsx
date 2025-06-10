import react from "react";

const styles = {
    expContainger: {
        width: '100%',
        backgroundColor: '#44474BCC',
        color: 'white',
        borderRadius: '18px',
        marginTop: '20px',
        paddingBottom: '4px',
    },
    expTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: '10px',
        padding: '12px 0',
    },
    textContainer: {
        padding: '0 20px 10px',
        display: 'flex',
        fontSize: '6px',
        alignItems: 'center',
        fontWeight: '400',
    },
    imgContainer: {
        width: '20px',
        height: '12px',
        display: 'flex',
        justifyContent: 'center',
    },
    levelText: {
        width: '60px',
        textAlign: 'center',
    },
    expText: {
        width: '200px',
        marginLeft: '10px',
    },
    additional: {
        marginTop: '30px',
        width: '100%',
        textAlign: 'center',
        color: '#44474B',
    },
    additionalBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    addTextBox: {
        width: '50%',
        fontSize: '8px',
        fontWeight: '400',
    },
    addTextStrong: {
        fontSize: '10px',
        fontWeight: '600',
        marginTop: '10px',
    }
}

function LevelExp(props) {
    return (
        <div>
            <div style={styles.expContainger}>
                <div style={styles.expTitle}>등급 설명</div>
                <div style={styles.textContainer}>
                    <div style={styles.imgContainer}><img src="images/icon/rate_0.png" height="12px"/></div>
                    <div style={styles.levelText}>초승달 등급</div>
                    <div style={styles.expText}>문화생활을 갓 시작한 새내기 등급</div>
                </div>
                <div style={styles.textContainer}>
                    <div style={styles.imgContainer}><img src="images/icon/rate_1.png" height="12px"/></div>
                    <div style={styles.levelText}>상현달 등급</div>
                    <div style={styles.expText}>문화생활에 익숙해진 일반인</div>
                </div>
                <div style={styles.textContainer}>
                    <div style={styles.imgContainer}><img src="images/icon/rate_2.png" height="12px"/></div>
                    <div style={styles.levelText}>보름달 등급</div>
                    <div style={styles.expText}>문화생활 만랩! 이제 나도 문화시민!</div>
                </div>
                <div style={styles.textContainer}>
                    <div style={styles.imgContainer}><img src="images/icon/rate_3.png" height="12px"/></div>
                    <div style={styles.levelText}>하현달 등급</div>
                    <div style={styles.expText}>어? 문화생활과 매너에 소홀해 지지 않았나요? 신경 써 주세요</div>
                </div>
                <div style={styles.textContainer}>
                    <div style={styles.imgContainer}><img src="images/icon/rate_4.png" height="12px"/></div>
                    <div style={styles.levelText}>그믐달 등급</div>
                    <div style={styles.expText}>매너 비상!! 문화생활 시 매너를 지켜주세요!</div>
                </div>
            </div>
            <div style={styles.additional}>
                <div style={{fontWeight: '600', marginBottom: '20px'}}>등급이</div>
                <div style={styles.additionalBox}>
                    <div style={styles.addTextBox}>
                        <div>
                            문화생활 빈도가 올라갈수록
                        </div>
                        <div>
                            다른사람에게 매너있게 행동할수록
                        </div>
                        <div style={styles.addTextStrong}>
                            올라가요
                        </div>
                    </div>
                    <div style={styles.addTextBox}>
                        <div>
                            문화생활 빈도가 낮을수록
                        </div>
                        <div>
                            다른사람에게 비매너하게 행동할수록
                        </div>
                        <div style={styles.addTextStrong}>
                            내려가요
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelExp;