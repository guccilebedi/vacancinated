import React, {useState} from "react";
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Board from "./components/Board";
import PlusButton from "./components/UI/button/PlusButton";
import ButtonsPane from "./components/ButtonsPane";


function App() {
    const [vacancies, setVacancies] = useState([
        {id: 0, name: "Веб-разработчик", company: "Trivago", fromColumn: "ВИШЛИСТ"},
        {id: 1, name: "Инженер по тестированию", company: "Google", fromColumn: "ВИШЛИСТ"},
        {id: 2, name: "Front End Разработчик", company: "Mail.ru", fromColumn: "ВИШЛИСТ"},
        {id: 3, name: "Backend разработчик", company: "Yandex", fromColumn: "ВИШЛИСТ"},
        {id: 4, name: "Инженер по тестированию", company: "Aviasales", fromColumn: "ВИШЛИСТ"},
        {id: 5, name: "Инженер по тестированию", company: "Mail.ru", fromColumn: "ОТКЛИК"},
        {id: 6, name: "Графический дизайнер", company: "SteadyControl", fromColumn: "ОТКЛИК"},
        {id: 7, name: "Веб-разработчик", company: "Mail.ru", fromColumn: "ОТКЛИК"},
        {id: 8, name: "Разработчик C++", company: "Альт", fromColumn: "ОТКЛИК"},
        {id: 9, name: "Python-разработчик", company: "VK", fromColumn: "ИНТЕРВЬЮ"},
        {id: 10, name: "Аналитик данных", company: "Softline", fromColumn: "ИНТЕРВЬЮ"},
        {id: 11, name: "Front End Разработчик", company: "Yandex", fromColumn: "ПРЕДЛОЖЕНИЯ"},
        {id: 12, name: "Backend разработчик", company: "Aviasales", fromColumn: "ОТКАЗЫ"},
    ]);

    const [columns, setColumns] = useState([
        {name: "ВИШЛИСТ"} ,
        {name: "ОТКЛИК"},
        {name: "ИНТЕРВЬЮ"},
        {name: "ПРЕДЛОЖЕНИЯ"},
        {name: "ОТКАЗЫ"}
    ])

    const createVacancy = (newVacancy) => {
        setVacancies([...vacancies, newVacancy])
    }

    return (
        <div className="App">
            <ButtonsPane/>
            <Board columns={columns} vacancies={vacancies}/>
        </div>
    );
}

export default App;
