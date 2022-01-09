import React, {useState} from 'react';
import Vacancy from "./Vacancy";
import AddVacancyModal from "./UI/modal/AddVacancyModal";
import AddVacancyForm from "./AddVacancyForm";
import PlusButton from "./UI/button/PlusButton";

const Column = ({column, vacancies, createVacancy}) => {
    const [modal, setModal] = useState(false);

    return (
        <div className="column">
            <div className="columnTopContent">
                <PlusButton onClick={() => console.log("1")}>...</PlusButton>
                <div className="columnName">
                    {column.name}
                </div>
                <PlusButton onClick={() => setModal(true)}>+</PlusButton>
                <AddVacancyModal visible={modal} setVisible={setModal}><AddVacancyForm
                    create={createVacancy}/></AddVacancyModal>
            </div>
            <div className="columnContent">
                <div>
                    {vacancies.map(vacancy => {
                        if (vacancy.fromColumn === column.name)
                            return <Vacancy vacancy={vacancy} key={vacancy.id}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Column;