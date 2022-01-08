import React from 'react';
import cl from './Button.module.css';

const PlusButton = ({children, ...props}) => {
    return (
        <button className={cl.PlusButton}>
            {children}
        </button>
    );
};

export default PlusButton;