import React, { FC } from 'react'
import { buttonCal } from '../../Types/types';

type ButtonProps = {
    button: buttonCal,
    handleClick: (text: string) => void;
}

const Button: FC<ButtonProps> = ({ button, handleClick }) => {
    return (
        <button
            type="button"
            style={{ 'color': button.color }}
            onClick={() => handleClick(button.text)}>
            {button.label}
        </button>
    );
}

export default Button;
