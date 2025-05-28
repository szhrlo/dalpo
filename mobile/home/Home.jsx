import React from "react";

import "./Home.css"

import Topbar from "../Topbar";
import Advertisement from "./ui/Advertisement";
import CategoryIcon from "./ui/CategoryIcon";
import MoreButton from "./ui/MoreButton";
import ContainerTitle from "./ui/ContainerTitle";
import PopularBox from "./ui/PopularBox";
import Bottombar from "../Bottombar";

function Mobile(props) {
    return (
        <div>
            <div className="wrapper">
                <Topbar />
                <Advertisement />
                <CategoryIcon />

                <div className="moreContainer">
                    <MoreButton title="moreBenefit" name="혜택 더보기" />
                    <MoreButton title="thisCoupon" name="이번달 쿠폰" />
                    <MoreButton title="moreExhibition" name="기획전 더보기" />
                </div>

                <div className="recentContainer">
                    <ContainerTitle title="최근 본 문화" />
                </div>

                <div className="popularContainer">
                    <ContainerTitle title="인기 행사" />
                    <div className="popularBoxContainer">
                        <PopularBox
                            title="ski"
                            name="겨울 특강 강원도 스키 강습"
                        />
                        <PopularBox
                            title="artist"
                            name="세계 역사 속 화가 회화전"
                        />
                        <PopularBox
                            title="summer"
                            name="2024의 여름 회화전"
                        />
                    </div>
                </div>
                
            </div>
            <Bottombar />
        </div>
    );
}

export default Mobile;