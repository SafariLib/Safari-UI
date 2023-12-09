import { CircularProgress, CircularProgressProps, css, styled, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { classNames } from '../../utils';
import { Ellipsis, EllipsisDot, Roller, RollerDot, RollingEllipsis, Spinner, SpinnerDot } from './variants';

const {
    SafariUILoader,
    SafariUILoaderEllipsis,
    SafariUILoaderEllipsisDot,
    SafariUILoaderEllipsisRolling,
    SafariUILoaderRoller,
    SafariUILoaderRollerDot,
    SafariUILoaderSpinner,
    SafariUILoaderSpinnerDot,
} = classNames;

// FIXME: Some variants does not render well on small values.
// - Roller

export interface LoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller' | undefined;
    color?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'error'
        | 'info'
        | React.CSSProperties['color']
        | undefined;
}

/**
 * Pure CSS loaders.
 * - `size` _'small'_ | _'medium'_ | _'large'_ | number | _undefined_
 *
 * The size of the loader. If type is number it will be considered as pixels
 *
 * - `variant` _'default'_ | _'ellipsis'_ | _'ellipsis-rolling'_ | _'spinner'_ | _'roller'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **Source**
 *  - https://loading.io/css/
 *  - https://cssloaders.github.io/
 */
const Loader: FC<LoaderProps> = ({ variant = 'ring', size = 'medium', color = 'primary' }) => {
    const theme = useTheme();

    const isHexColor = (color: React.CSSProperties['color']) => /^#([0-9A-F]{3}){1,2}$/i.test(color!);

    const sizeInPixels = (() => {
        switch (size) {
            case 'small':
                return 40;
            case 'medium':
                return 80;
            case 'large':
                return 120;
            default:
                if (typeof size === 'number') return size;
                console.warn(`Invalid size prop: ${size}. Defaulting to medium size.`);
                return 80;
        }
    })();

    const colorMatchesVariant = (() =>
        color === 'primary' ||
        color === 'secondary' ||
        color === 'success' ||
        color === 'warning' ||
        color === 'error' ||
        color === 'info')();

    const colorInHex = (() => {
        switch (color) {
            case 'primary':
                return theme.palette.primary.main;
            case 'secondary':
                return theme.palette.secondary.main;
            case 'success':
                return theme.palette.success.main;
            case 'warning':
                return theme.palette.warning.main;
            case 'error':
                return theme.palette.error.main;
            case 'info':
                return theme.palette.info.main;
            default:
                console.log(color);
                if (isHexColor(color)) return color;
                console.warn(`Invalid color prop: ${color}. Defaulting to primary color.`);
                return theme.palette.primary.main;
        }
    })();

    return (
        <Wrapper className={SafariUILoader}>
            {variant === 'ellipsis' && (
                <Ellipsis size={sizeInPixels} className={SafariUILoaderEllipsis}>
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                </Ellipsis>
            )}
            {variant === 'ellipsis-rolling' && (
                <RollingEllipsis size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisRolling} />
            )}
            {variant === 'spinner' && (
                <Spinner size={sizeInPixels} className={SafariUILoaderSpinner}>
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                    <SpinnerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderSpinnerDot} />
                </Spinner>
            )}
            {variant === 'roller' && (
                <Roller size={sizeInPixels} className={SafariUILoaderRoller}>
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                </Roller>
            )}
            {variant === 'default' && (
                <CircularProgress
                    color={colorMatchesVariant ? (color as CircularProgressProps['color']) : 'inherit'}
                    size={sizeInPixels}
                />
            )}
        </Wrapper>
    );
};

export const Wrapper = styled('div')(
    () => css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

export default Loader;
