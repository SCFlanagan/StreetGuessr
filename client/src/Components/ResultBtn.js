import React from 'react';

const ResultBtn = props => {
    return (
        <button
            className={props.class}
            onClick={props.handleClick}>
            {props.text}
        </button>
    );
};

export default ResultBtn;