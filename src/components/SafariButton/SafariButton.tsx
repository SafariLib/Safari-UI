import { css, styled, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { classNames } from '../../utils';
import Loader from '../SafariLoader/SafariLoader';

const { SafariUIButton } = classNames;

import { Button as MUIButton, type ButtonProps } from '@mui/material';

export interface SafariButtonProps extends Omit<ButtonProps, 'disableElevation'> {
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
const SafariButton: FC<SafariButtonProps> = ({
    children,
    isLoading,
    loaderVariant = 'default',
    elevation,
    textTransform = 'initial',
    ...props
}) => {
    const { palette, typography } = useTheme();
    const remValue = typography.fontSize ?? 16;

    return (
        <MUIButton className={SafariUIButton} disableElevation={!elevation} {...props}>
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
            <Content aria-hidden={isLoading} isLoading={isLoading} textTransform={textTransform}>
                {children}
            </Content>
        </MUIButton>
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

export const Content = styled('div')<{ isLoading?: boolean; textTransform: SafariButtonProps['textTransform'] }>(
    ({ isLoading, textTransform }) => css`
        opacity: ${isLoading ? 0 : 1};
        text-transform: ${textTransform};
    `,
);

export const Button = styled(MUIButton)(css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`);

export default SafariButton;
