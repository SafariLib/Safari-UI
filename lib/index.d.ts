import { ButtonProps } from '@mui/material';
import React, { FC } from 'react';

interface SafariButtonProps extends Omit<ButtonProps, 'disableElevation'> {
    isLoading?: boolean | undefined;
    loaderVariant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | undefined;
    elevation?: boolean;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial';
}
declare const SafariButton: FC<SafariButtonProps>;

interface SafariLoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller' | undefined;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | React.CSSProperties['color'] | undefined;
}
declare const SafariLoader: FC<SafariLoaderProps>;

export { SafariButton, type SafariButtonProps, SafariLoader, type SafariLoaderProps };
