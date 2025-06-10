import React from "react";

import Todo from "./Todo";
import LevelExp from "./LevelExp";

const styles = {
    meContainer: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    myRate: {
        textAlign: 'left',
        fontSize: '12px',
        color: '#44474B',
        fontWeight: '400',
    },
    rateContainer: {
        marginTop: '20px',
    },
    rateBox: {
        margin: '4px 0',
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: '10px',
        borderRadius: '10px',
    },
}

function RatingContent(props) {

    const myRating = 60;

    const level = ['초승달', '상현달', '보름달', '하현달', '그믐달'];
    const myLevel = 1;

    return (
        <div style={{width: '100%'}}>
            <div style={styles.meContainer}>
                <div style={styles.myRate}>
                    <div><strong>달래</strong> 님은</div>
                    <div>{level[myLevel]} 상위 {myRating}% 입니다</div>
                </div>
            </div>
            <div style={styles.rateContainer}>
                <span style={{color: '#6FA5EB', fontSize: '8px', fontWeight: '600'}}>등급보기</span>
                <div style={styles.rateBox}>
                    <div style={{
                        width: myRating + '%', 
                        height: '100%', 
                        backgroundColor: '#6FA5EB', 
                        borderRadius: '10px'
                    }}>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <img src="images/icon/rate_1.png" style={{height: '16px'}}></img>
                    <img src="images/icon/rate_2.png" style={{height: '16px'}}></img>
                </div>
            </div>
            <Todo myLevel={myLevel} myRating={myRating} />
            <LevelExp />
        </div>
        
    );
}

export default RatingContent;