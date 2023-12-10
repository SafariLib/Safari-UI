import { css, styled, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { classNames } from '../../utils';
import Loader from '../Loader/Loader';

const { SafariUIButton } = classNames;

import { Button as MUIButton, type ButtonProps as MUIButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MUIButtonProps, 'disableElevation'> {
    isLoading?: boolean | undefined;
    loaderVariant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | undefined;
    elevation?: boolean;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial';
}

/**
 * Extends MUI Button with a loading state.
 * - `isLoading` _boolean_
 *
 * If true, the button's children will be disabled and show a loader.
 *
 * - `loaderVariant` _'default'_ | _'ellipsis'_ | _'ellipsis-rolling'_ | _'spinner'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **MUI Button API**
 *
 * https://mui.com/material-ui/api/button/
 */
const Button: FC<ButtonProps> = ({
    children,
    isLoading,
    loaderVariant = 'default',
    elevation,
    textTransform = 'initial',
    size,
    ...props
}) => {
    const { palette, typography } = useTheme();
    const remValue = typography.fontSize ?? 16;

    return (
        <SafariButton className={SafariUIButton} disableElevation={!elevation} size={size} {...props}>
            <LoaderWrapper aria-hidden={!isLoading} isLoading={isLoading}>
                <Loader
                    variant={loaderVariant}
                    size={(() => {
                        // NOTE: Exception for each variants goes here
                        if (loaderVariant === 'default') {
                            switch (size) {
                                case 'small':
                                    return remValue * (2 * 0.6);
                                case 'large':
                                    return remValue * (3 * 0.6);
                                default:
                                    return remValue * (2.5 * 0.6);
                            }
                        } else if (loaderVariant === 'spinner') {
                            switch (size) {
                                case 'small':
                                    return remValue * (2 * 0.7);
                                case 'large':
                                    return remValue * (3 * 0.7);
                                default:
                                    return remValue * (2.5 * 0.7);
                            }
                        } else if (loaderVariant === 'ellipsis') {
                            switch (size) {
                                case 'small':
                                    return remValue * 2;
                                case 'large':
                                    return remValue * 3;
                                default:
                                    return remValue * 2.5;
                            }
                        } else {
                            switch (size) {
                                case 'small':
                                    return remValue * (2 * 0.8);
                                case 'large':
                                    return remValue * (3 * 0.8);
                                default:
                                    return remValue * (2.5 * 0.8);
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
            <Content aria-hidden={isLoading} isLoading={isLoading} textTransform={textTransform}>
                {children}
            </Content>
        </SafariButton>
    );
};

export const LoaderWrapper = styled('div')<{ isLoading?: boolean }>(
    ({ isLoading }) => css`
        opacity: ${isLoading ? 1 : 0};
        position: absolute;
        display: flex;
        align-items: center;
    `,
);

export const Content = styled('div')<{ isLoading?: boolean; textTransform: ButtonProps['textTransform'] }>(
    ({ isLoading, textTransform }) => css`
        opacity: ${isLoading ? 0 : 1};
        text-transform: ${textTransform};
    `,
);

export const SafariButton = styled(MUIButton)(css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    &.MuiButton-sizeSmall {
        padding: 0.1rem 0.8rem;
    }
    &.MuiButton-sizeMedium {
        padding: 0.2rem 1rem;
    }
    &.MuiButton-sizeLarge {
        padding: 0.4rem 1.4rem;
    }
`);

export default Button;
