import React from 'react';
import { resolveClasses } from '../../utils';
import './Button.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean | undefined;
    disabled?: boolean | undefined;
    variant?: 'default' | 'text' | 'outlined';
    loaderVariant?: 'default';
    color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
    const className = resolveClasses(['SafariUI-btn']);

    return (
        <button className={className} {...props}>
            {isLoading ? '' : children}
        </button>
    );
};

export default Button;
