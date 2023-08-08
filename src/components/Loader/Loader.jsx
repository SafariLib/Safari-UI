'use client';

import { useTheme } from '@mui/material';
import { classNames, isHexColor } from '../../utils';
import {
    EllipsisDot,
    EllipsisRollingWrapper,
    EllipsisWrapper,
    RingTrail,
    RingWrapper,
    RollerDot,
    RollerTrailingWrapper,
    RollerWrapper,
    SpinnerDot,
    SpinnerWrapper,
} from './variants';

const {
    SafariUILoader,
    SafariUILoaderEllipsis,
    SafariUILoaderEllipsisDot,
    SafariUILoaderEllipsisRolling,
    SafariUILoaderRing,
    SafariUILoaderRingTrail,
    SafariUILoaderRoller,
    SafariUILoaderRollerDot,
    SafariUILoaderRollerTrailing,
    SafariUILoaderSpinner,
    SafariUILoaderSpinnerDot,
} = classNames;

/**
 * @typedef {Object} LoaderProps
 * @property {'small' | 'medium' | 'large' | 'x-large' | 'xx-large'} [size]
 * @property {'ellipsis' | 'ellipsisRolling' | 'spinner' | 'roller' | 'rollerTrailing' | 'ring'} [variant]
 * @property {'primary'| 'secondary' | 'success' | 'warning' | 'error' | 'info' | React.CSSProperties['color']}
 */

/**
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
const Loader = ({ variant = 'ring', size = 'medium', color = 'primary' }) => {
    const theme = useTheme();
    const sizeInPx = (() => {
        switch (size) {
            case 'small':
                return 20;
            case 'medium':
                return 40;
            case 'large':
                return 60;
            case 'x-large':
                return 80;
            case 'xx-large':
                return 100;
            default:
                return 40;
        }
    })();

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
                if (isHexColor(color)) return color;
                console.warn(`Invalid color prop: ${color}. Defaulting to primary color.`);
                return theme.palette.primary.main;
        }
    })();

    return (
        <div className={SafariUILoader}>
            {variant === 'ellipsis' && (
                <EllipsisWrapper size={sizeInPx} className={SafariUILoaderEllipsis}>
                    <EllipsisDot size={sizeInPx} color={colorInHex} className={SafariUILoaderEllipsisDot}></EllipsisDot>
                    <EllipsisDot size={sizeInPx} color={colorInHex} className={SafariUILoaderEllipsisDot}></EllipsisDot>
                    <EllipsisDot size={sizeInPx} color={colorInHex} className={SafariUILoaderEllipsisDot}></EllipsisDot>
                    <EllipsisDot size={sizeInPx} color={colorInHex} className={SafariUILoaderEllipsisDot}></EllipsisDot>
                </EllipsisWrapper>
            )}
            {variant === 'ellipsisRolling' && (
                <EllipsisRollingWrapper size={sizeInPx} color={colorInHex} className={SafariUILoaderEllipsisRolling} />
            )}
            {variant === 'spinner' && (
                <SpinnerWrapper size={sizeInPx} className={SafariUILoaderSpinner}>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                    <SpinnerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderSpinnerDot}></SpinnerDot>
                </SpinnerWrapper>
            )}
            {variant === 'roller' && (
                <RollerWrapper size={sizeInPx} className={SafariUILoaderRoller}>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                    <RollerDot size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerDot}></RollerDot>
                </RollerWrapper>
            )}
            {variant === 'rollerTrailing' && (
                <RollerTrailingWrapper size={sizeInPx} color={colorInHex} className={SafariUILoaderRollerTrailing} />
            )}
            {variant === 'ring' && (
                <RingWrapper size={sizeInPx} className={SafariUILoaderRing}>
                    <RingTrail size={sizeInPx} color={colorInHex} className={SafariUILoaderRingTrail}></RingTrail>
                    <RingTrail size={sizeInPx} color={colorInHex} className={SafariUILoaderRingTrail}></RingTrail>
                    <RingTrail size={sizeInPx} color={colorInHex} className={SafariUILoaderRingTrail}></RingTrail>
                    <RingTrail size={sizeInPx} color={colorInHex} className={SafariUILoaderRingTrail}></RingTrail>
                </RingWrapper>
            )}
        </div>
    );
};

export default Loader;
