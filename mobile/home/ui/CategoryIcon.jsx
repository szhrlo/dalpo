import React from "react";

import "./HomeUIStyle.css";

import CategoryIconItem from "./CategoryIconItem";

function CategoryIcon(props) {
    const categoryList = [
        {
            "title": "play",
            "name": "뮤지컬/연극"
        },
        {
            "title": "concert",
            "name": "콘서트"
        },
        {
            "title": "exhibit",
            "name": "전시회"
        },
        {
            "title": "expo",
            "name": "박람회"
        },
        {
            "title": "festival",
            "name": "축제"
        },
        {
            "title": "leisure",
            "name": "레저"
        },
        {
            "title": "culture",
            "name": "문화센터"
        },
        {
            "title": "class",
            "name": "일일 클래스"
        },
        {
            "title": "artist",
            "name": "강사 모집"
        },
        {
            "title": "artist",
            "name": "예술가 모집"
        }        
    ];

    const chunckedCategories = [];
    for (let i = 0; i < categoryList.length; i += 5) {
        chunckedCategories.push(categoryList.slice(i, i + 5));
    }

    return (
        <div className="categoryContainerBox">
            {chunckedCategories.map((chunck, index) => (
                <div key={index} className="categoryContainer">
                    {chunck.map((category, index) => (
                        <CategoryIconItem
                            key = {index}
                            title = {category.title}
                            name = {category.name}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CategoryIcon;
