import React, {useState} from 'react';
import Vacancy from "./Vacancy";
import AddVacancyModal from "./UI/modal/AddVacancyModal";
import AddVacancyForm from "./AddVacancyForm";

const Column = ({column, vacancies, createVacancy}) => {
    const [modal, setModal] = useState(false);

    return (
        <div className="column">
            <h1>{column.name}</h1>
            <button onClick={() => setModal(true)}>+</button>
            <AddVacancyModal visible={modal} setVisible={setModal}><AddVacancyForm
                create={createVacancy}/></AddVacancyModal>
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