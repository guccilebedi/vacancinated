import React, {useState} from 'react';
import Input from "./UI/input/Input";
import BackButton from "./UI/button/BackButton";
import ForwardButton from "./UI/button/ForwardButton";
import TextArea from "./UI/input/TextArea";

const AddVacancyForm = ({create, setVisible, ...props}) => {
    const [vacancy, setVacancy] = useState({name: '', company: '', address: '', salary: '', description: ''});

    const addVacancy = (e) => {
        e.preventDefault()
        const newVacancy = {
            ...vacancy, id: Date.now()
        }
        create(newVacancy)
        setVacancy({name: '', company: '', address: '', salary: '', description: ''})
    }

    return (
        <form>
            Вакансия<br/>
            <Input
                value={vacancy.name}
                onChange={e => setVacancy({...vacancy, name: e.target.value})}
                type="text"
                name="name"/><br/>
            Компания<br/>
            <Input
                value={vacancy.company}
                onChange={e => setVacancy({...vacancy, company: e.target.value})}
                type="text"
                name="company"/><br/>
            Адрес<br/>
            <Input
                value={vacancy.address}
                onChange={e => setVacancy({...vacancy, address: e.target.value})}
                type="text"
                name="address"/><br/>
            Зарплата<br/>
            <Input
                value={vacancy.salary}
                onChange={e => setVacancy({...vacancy, salary: e.target.value})}
                type="text"
                name="salary"/><br/>
            Описание<br/>
            <TextArea
                value={vacancy.description}
                onChange={e => setVacancy({...vacancy, description: e.target.value})}
                type="text"
                name="description"/><br/>
            <BackButton onClick={() => setVisible(false)}>НАЗАД</BackButton>
            <ForwardButton onClick={addVacancy}>ДОБАВИТЬ</ForwardButton>
        </form>
    );
};

export default AddVacancyForm;