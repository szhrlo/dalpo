import React, { useState } from "react";

const styles = {
    container: {
        width: "100%",
        minHeight: "80px",
        backgroundColor: "#F2F2F2",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
    },
    dayText: {
        padding: "10px 16px 0 16px",
        fontSize: "10px",
        color: "#44474B",
    },
    contentContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4px",
        marginBottom: "20px",
    },
    contentText: {
        fontSize: "8px",
        color: "#44474BB2",
    }
}


function MyRecord(props){
    const [today, setToday] = useState(new Date());
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayName = days[today.getDay()];

    const formattedDay = `${year}년 ${month}월 ${day}일 ${dayName}`;

    return(
        <div style={{marginTop: '16px'}}>
            <div style={styles.container}>
                <span style={styles.dayText}>{formattedDay}</span>
                <div style={styles.contentContainer}>
                    <div style={styles.contentText}>
                        현재 표시된 문화생활이 없습니다
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyRecord;