'use client';

import { useTheme } from '@mui/material';
import { classNames } from '../../utils';
import Loader from '../Loader/Loader.jsx';
import { Content, LoaderWrapper, MUIButton } from './styled';

const { SafariUIButton } = classNames;

/**
 * @typedef {Object} ButtonProps
 * @property {boolean} [isLoading]
 * @property {'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller'} [loaderVariant]
 * @property {React.ReactNode} [children]
 */

/**
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
const Button = ({ children, isLoading, loaderVariant = 'default', ...props }) => {
    const { palette, typography } = useTheme();
    const remValue = typography.fontSize ?? 16;

    return (
        <MUIButton className={SafariUIButton} {...props}>
            <LoaderWrapper aria-hidden={!isLoading} isLoading={isLoading}>
                <Loader
                    variant={loaderVariant}
                    size={(() => {
                        // NOTE: Exception for each variants goes here
                        if (loaderVariant === 'default') {
                            switch (props.size) {
                                case 'small':
                                    return remValue * (2 * 0.75);
                                case 'large':
                                    return remValue * (3 * 0.75);
                                default:
                                    return remValue * (2.5 * 0.75);
                            }
                        } else if (loaderVariant === 'spinner') {
                            switch (props.size) {
                                case 'small':
                                    return remValue * (2 * 0.75);
                                case 'large':
                                    return remValue * (3 * 0.75);
                                default:
                                    return remValue * (2.5 * 0.75);
                            }
                        } else {
                            switch (props.size) {
                                case 'small':
                                    return remValue * 2;
                                case 'large':
                                    return remValue * 3;
                                default:
                                    return remValue * 2.5;
                            }
                        }
                    })()}
                    color={(() => {
                        const { color, variant, disabled } = props;
                        if (disabled) return palette.action.disabled;
                        if (color === 'primary' && variant === 'contained') return palette.primary.contrastText;
                        if (color === 'primary' && (variant === 'outlined' || variant === 'text'))
                            return palette.primary.main;
                        if (color === 'secondary' && variant === 'contained') return palette.secondary.contrastText;
                        if (color === 'secondary' && (variant === 'outlined' || variant === 'text'))
                            return palette.secondary.main;
                        if (color === 'success' && variant === 'contained') return palette.success.contrastText;
                        if (color === 'success' && (variant === 'outlined' || variant === 'text'))
                            return palette.success.main;
                        if (color === 'error' && variant === 'contained') return palette.error.contrastText;
                        if (color === 'error' && (variant === 'outlined' || variant === 'text'))
                            return palette.error.main;
                        if (color === 'warning' && variant === 'contained') return palette.warning.contrastText;
                        if (color === 'warning' && (variant === 'outlined' || variant === 'text'))
                            return palette.warning.main;
                        if (color === 'info' && variant === 'contained') return palette.info.contrastText;
                        if (color === 'info' && (variant === 'outlined' || variant === 'text'))
                            return palette.info.main;
                        if (variant === 'contained') return palette.common.white;
                        if (variant === 'outlined') return palette.text.primary;
                        if (variant === 'text') return palette.text.primary;
                        return color;
                    })()}
                />
            </LoaderWrapper>
            <Content aria-hidden={isLoading} isLoading={isLoading}>
                {children}
            </Content>
        </MUIButton>
    );
};

export default Button;
