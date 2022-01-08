import React from 'react';
import cl from './AddVacancyModal.module.css'

const AddVacancyModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.addVacancy]
    if (visible) {
        rootClasses.push(cl.active);
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.addVacancyContent}>
                {children}
            </div>
        </div>
    );
};

export default AddVacancyModal;