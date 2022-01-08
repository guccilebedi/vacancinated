import React from 'react';

const Vacancy = (props) => {
    return (
        <div className="vacancy">
            <div className="vacancy__content">
                <div>
                    {props.vacancy.name}<br/>
                    {props.vacancy.company}
                </div>
            </div>
        </div>
    );
};

export default Vacancy;