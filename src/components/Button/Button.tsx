import React from 'react';
import './Button.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({ isLoading, ...props }) => {
    return <button className="SafariUI-Button" {...props} />;
};

export default Button;
