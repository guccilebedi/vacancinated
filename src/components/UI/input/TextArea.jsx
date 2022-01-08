import React from 'react';
import cl from "./Input.module.css"

const TextArea = (props) => {
    return (
        <textarea className={cl.TextArea} {...props}/>
    );
};

export default TextArea;