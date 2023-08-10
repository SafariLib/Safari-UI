'use client';
import { useTheme, CircularProgress } from '@mui/material';
import { jsxs, jsx } from 'react/jsx-runtime';
import { isHexColor } from '../../utils/colorHelper.js';
import { LoaderWrapper } from './styled/LoaderWrapper.styled.js';
import { EllipsisWrapper, EllipsisDot } from './styled/variants/Ellipsis.styled.js';
import { EllipsisRollingWrapper } from './styled/variants/EllipsisRolling.styled.js';
import { SpinnerWrapper, SpinnerDot } from './styled/variants/Spinner.styled.js';
import { RollerWrapper, RollerDot } from './styled/variants/Roller.styled.js';
import { classNames } from '../../utils/classNames.js';

const {
  SafariUILoader,
  SafariUILoaderEllipsis,
  SafariUILoaderEllipsisDot,
  SafariUILoaderEllipsisRolling,
  SafariUILoaderRoller,
  SafariUILoaderRollerDot,
  SafariUILoaderSpinner,
  SafariUILoaderSpinnerDot
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
const Loader = _ref => {
  let {
    variant = 'ring',
    size = 'medium',
    color = 'primary'
  } = _ref;
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
  const colorMatchesVariant = (() => color === 'primary' || color === 'secondary' || color === 'success' || color === 'warning' || color === 'error' || color === 'info')();
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
  return /*#__PURE__*/jsxs(LoaderWrapper, {
    className: SafariUILoader,
    children: [variant === 'ellipsis' && /*#__PURE__*/jsxs(EllipsisWrapper, {
      size: sizeInPixels,
      className: SafariUILoaderEllipsis,
      children: [/*#__PURE__*/jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      }), /*#__PURE__*/jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      }), /*#__PURE__*/jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      }), /*#__PURE__*/jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      })]
    }), variant === 'ellipsis-rolling' && /*#__PURE__*/jsx(EllipsisRollingWrapper, {
      size: sizeInPixels,
      color: colorInHex,
      className: SafariUILoaderEllipsisRolling
    }), variant === 'spinner' && /*#__PURE__*/jsxs(SpinnerWrapper, {
      size: sizeInPixels,
      className: SafariUILoaderSpinner,
      children: [/*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      })]
    }), variant === 'roller' && /*#__PURE__*/jsxs(RollerWrapper, {
      size: sizeInPixels,
      className: SafariUILoaderRoller,
      children: [/*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      })]
    }), variant === 'default' && /*#__PURE__*/jsx(CircularProgress, {
      color: colorMatchesVariant ? color : 'inherit',
      size: sizeInPixels
    })]
  });
};
var Loader$1 = Loader;

export { Loader$1 as default };
