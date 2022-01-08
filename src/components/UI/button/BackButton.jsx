import React from 'react';
import cl from './Button.module.css';

const BackButton = ({children, ...props}) => {
    return (
        <button className={cl.BackButton}>
            {children}
        </button>
    );
};

export default BackButton;