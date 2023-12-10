import { ButtonProps as ButtonProps$1 } from '@mui/material';
import React, { FC } from 'react';

interface ButtonProps extends Omit<ButtonProps$1, 'disableElevation'> {
    isLoading?: boolean | undefined;
    loaderVariant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | undefined;
    elevation?: boolean;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial';
}
declare const Button: FC<ButtonProps>;

interface LoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller' | undefined;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | React.CSSProperties['color'] | undefined;
}
declare const Loader: FC<LoaderProps>;

export { Button, type ButtonProps, Loader, type LoaderProps };
