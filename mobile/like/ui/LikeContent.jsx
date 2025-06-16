import react from "react";

import LikeContentItem from "./LikeContentItem";
import "./LikeContent.css";

function LikeContent(props) {

    const contentsList = [
        {
            "source": "designfairweek",
            "category": "전시회",
            "title": "디자인 페어 위크",
            "period": "2025.09.20~2025.09.23"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카 | 대구",
            "period": "2024.02.13~2024.02.21"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카",
            "period": "2024.02.13~2024.02.21"
        },
        {
            "source": "designfairweek",
            "category": "전시회",
            "title": "디자인 페어 위크",
            "period": "2025.09.20~2025.09.23"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카",
            "period": "2024.02.13~2024.02.21"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카",
            "period": "2024.02.13~2024.02.21"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카",
            "period": "2024.02.13~2024.02.21"
        },
        {
            "source": "designfairweek",
            "category": "전시회",
            "title": "디자인 페어 위크",
            "period": "2025.09.20~2025.09.23"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카",
            "period": "2024.02.13~2024.02.21"
        },
        {
            "source": "rebecca",
            "category": "뮤지컬",
            "title": "레베카",
            "period": "2024.02.13~2024.02.21"
        }        
    ];

    const chunckedContents = [];
    for (let i=0; i < contentsList.length; i += 3) {
        chunckedContents.push(contentsList.slice(i, i + 3));
    }

    return (
        <div className="contentContainerBox">
            {chunckedContents.map((chunck, index) => (
                <div key={index} className="contentContainer">
                    {chunck.map((content, index) => (
                        <LikeContentItem
                            key = {index}
                            src = {content.source}
                            category = {content.category}
                            title = {content.title}
                            period = {content.period}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default LikeContent;