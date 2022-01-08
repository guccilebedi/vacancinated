import React from 'react';
import Column from "./Column";

const Board = (props) => {
    return (
        <div className="board">
            {props.columns.map(column =>
                <Column column={column} vacancies={props.vacancies} key={column.name}/>
            )}
        </div>
    );
};

export default Board;