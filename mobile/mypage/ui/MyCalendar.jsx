import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';

const styles = {
    title: {
        marginTop: "16px",
        marginBottom: "8px",
        color: "#6FA5EB",
    },
    titleText: {
        fontSize: "12px",
    },
    year: {
        fontSize: "10px",

    },
}

const recordList = ['2025-5-20', '2025-5-22'];

function MyCalendar(props){
    // const [value, onChange] = useState(new Date());
    // const today = useState(new Date());

    return (
        <div>
            <div style={styles.title}><span style={styles.titleText}>문화달력</span><span style={styles.year}> / 2024</span></div>
            <Calendar
                view="month"
                minDetail="month"
                maxDetail="month"
                // onChange={onChange} value={value}
                // onChange={setSelectedDate} 
                // value={selectedDate} 
                calendarType="gregory"
                // view="month"
                prev2Label={null}
                next2Label={null}
                // showNeighboringMonth={false}
                tileClassName={({ date, view }) => {
                    if (view === 'month') {
                        const day = date.getDay();
                        if (day === 0) return 'custom-sunday';
                        if (day === 6) return 'custom-saturday';
                    }
                    return null;
                }}
                formatDay={(locale, date) => format(date, 'd', { locale: ko })}
                tileDisabled={() => true}
                tileContent={({ date, view }) => {
                    const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                    return recordList.includes(key) ? (
                        <div className="image-wrapper">
                            <img src="images/icon/stamp.png" />
                        </div>
                    ) : null;
                }}
            />
        </div>
    );
}

export default MyCalendar;