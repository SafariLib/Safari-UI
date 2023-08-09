'use client';

import { CircularProgress, useTheme } from '@mui/material';
import { classNames, isHexColor } from '../../utils';
import {
    EllipsisDot,
    EllipsisRollingWrapper,
    EllipsisWrapper,
    LoaderWrapper,
    RollerDot,
    RollerWrapper,
    SpinnerDot,
    SpinnerWrapper,
} from './styled';

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

/**
 * @typedef {Object} LoaderProps
 * @property {'small' | 'medium' | 'large' | number} [size]
 * @property {'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller'} [variant]
 * @property {'primary'| 'secondary' | 'success' | 'warning' | 'error' | 'info' | React.CSSProperties['color']}
 */

/**
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
const Loader = ({ variant = 'ring', size = 'medium', color = 'primary' }) => {
    const theme = useTheme();
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
        <LoaderWrapper className={SafariUILoader}>
            {variant === 'ellipsis' && (
                <EllipsisWrapper size={sizeInPixels} className={SafariUILoaderEllipsis}>
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                    <EllipsisDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderEllipsisDot} />
                </EllipsisWrapper>
            )}
            {variant === 'ellipsis-rolling' && (
                <EllipsisRollingWrapper
                    size={sizeInPixels}
                    color={colorInHex}
                    className={SafariUILoaderEllipsisRolling}
                />
            )}
            {variant === 'spinner' && (
                <SpinnerWrapper size={sizeInPixels} className={SafariUILoaderSpinner}>
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
                </SpinnerWrapper>
            )}
            {variant === 'roller' && (
                <RollerWrapper size={sizeInPixels} className={SafariUILoaderRoller}>
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                    <RollerDot size={sizeInPixels} color={colorInHex} className={SafariUILoaderRollerDot} />
                </RollerWrapper>
            )}
            {variant === 'default' && (
                <CircularProgress color={colorMatchesVariant ? color : 'inherit'} size={sizeInPixels} />
            )}
        </LoaderWrapper>
    );
};

export default Loader;
