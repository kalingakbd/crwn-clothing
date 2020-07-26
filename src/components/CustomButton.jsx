import React from "react";

import './styles/CustomButton.scss'

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            <span>{children}</span>
        </button>
    )
};

export default CustomButton;
