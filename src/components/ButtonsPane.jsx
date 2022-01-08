import React from 'react';
import ForwardButton from "./UI/button/ForwardButton";

const ButtonsPane = () => {
    return (
        <div className="buttonsPane">
            <div className="buttonsPaneContent">
                <ForwardButton>ВАКАНСИИ</ForwardButton>
                <ForwardButton>СОБЫТИЯ</ForwardButton>
                <ForwardButton>КОНТАКТЫ</ForwardButton>
                VACANCINATED
                <ForwardButton>КАРТА</ForwardButton>
                <ForwardButton>КАЛЕНДАРЬ</ForwardButton>
                <ForwardButton>СТАТИСТИКА</ForwardButton>
                <ForwardButton>АККАУНТ</ForwardButton>
            </div>
        </div>
    );
};

export default ButtonsPane;