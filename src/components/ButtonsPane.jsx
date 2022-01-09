import React from 'react';
import ForwardButton from "./UI/button/ForwardButton";

const ButtonsPane = () => {
    return (
        <div className="buttonsPane">
            <div className="buttonsPaneMiddleContent">
                <ForwardButton onClick={() => console.log("1")}>ВАКАНСИИ</ForwardButton>
                <ForwardButton>СОБЫТИЯ</ForwardButton>
                <ForwardButton>КОНТАКТЫ</ForwardButton>
                VACANCINATED
                <ForwardButton>КАРТА</ForwardButton>
                <ForwardButton>КАЛЕНДАРЬ</ForwardButton>
                <ForwardButton>СТАТИСТИКА</ForwardButton>
            </div>
            <div className="buttonsPaneRightContent">
                <ForwardButton>АККАУНТ</ForwardButton>
            </div>
        </div>
    );
};

export default ButtonsPane;