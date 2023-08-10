'use strict';

var material = require('@mui/material');
var jsxRuntime = require('react/jsx-runtime');

const classNames = {
  SafariUI: 'SafariUI',
  SafariUIDisabled: 'SafariUI-disabled',
  SafariUIButton: 'SafariUI-btn',
  SafariUIButtonText: 'SafariUI-btn-text',
  SafariUIButtonOutlined: 'SafariUI-btn-outlined',
  SafariUILoader: 'SafariUI-loader',
  SafariUILoaderEllipsis: 'SafariUI-loader-ellipsis',
  SafariUILoaderEllipsisDot: 'SafariUI-loader-ellipsis-dot',
  SafariUILoaderEllipsisRolling: 'SafariUI-loader-ellipsisRolling',
  SafariUILoaderSpinner: 'SafariUI-loader-spinner',
  SafariUILoaderSpinnerDot: 'SafariUI-loader-spinner-dot',
  SafariUILoaderRoller: 'SafariUI-loader-roller',
  SafariUILoaderRollerDot: 'SafariUI-loader-roller-dot'
};

const isHexColor = color => {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
};

const LoaderWrapper$1 = material.styled('div')(() => material.css`
        display: flex;
        align-items: center;
        justify-content: center;
    `);

const EllipsisWrapper = material.styled('div')(_ref => {
  let {
    size
  } = _ref;
  return material.css`
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `;
});
const EllipsisDot = material.styled('div')(_ref2 => {
  let {
    size,
    color
  } = _ref2;
  return material.css`
        position: absolute;
        background: ${color};
        border-radius: 50%;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        top: ${Math.round(size * 0.4125)}px;
        width: ${Math.round(size * 0.1625)}px;
        height: ${Math.round(size * 0.1625)}px;

        &:nth-of-type(1) {
            left: ${Math.round(size * 0.1)}px;
            animation: SafariUI-loader-ellipsis1 0.6s infinite;
        }

        &:nth-of-type(2) {
            left: ${Math.round(size * 0.1)}px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &:nth-of-type(3) {
            left: ${Math.round(size * 0.4)}px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &:nth-of-type(4) {
            left: ${Math.round(size * 0.7)}px;
            animation: SafariUI-loader-ellipsis3 0.6s infinite;
        }

        @keyframes SafariUI-loader-ellipsis1 {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes SafariUI-loader-ellipsis3 {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
        @keyframes SafariUI-loader-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(${Math.round(size * 0.3)}px, 0);
            }
        }
    `;
});

const EllipsisRollingWrapper = material.styled('div')(_ref => {
  let {
    size,
    color
  } = _ref;
  return material.css`
            width: ${Math.round(size * 0.1625)}px;
            height: ${Math.round(size * 0.1625)}px;
            border-radius: 50%;
            background: ${color};
            position: relative;

            &:before {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${color};
                transform: rotate(0deg) translate(${Math.round(size * 0.1625 * 1.85)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            }
            &:after {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${color};
                transform: rotate(0deg) translate(${Math.round(size * 0.3)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
                animation-delay: 0.5s;
            }

            @keyframes SafariUI-loader-ellipsisRolling-rotate {
                100% {
                    transform: rotate(360deg) translate(${Math.round(size * 0.3)}px);
                }
            }
        `;
});

const RollerWrapper = material.styled('div')(_ref => {
  let {
    size
  } = _ref;
  return material.css`
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `;
});
const RollerDot = material.styled('div')(_ref2 => {
  let {
    size,
    color
  } = _ref2;
  return material.css`
        transform-origin: ${Math.round(size * 0.5)}px ${Math.round(size * 0.5)}px;
        animation: SafariUI-loader-roller-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            width: ${Math.round(size * 0.0875)}px;
            height: ${Math.round(size * 0.0875)}px;
            border-radius: 50%;
            background: ${color};
            margin: -${Math.round(size * 0.05)}px 0 0 -${Math.round(size * 0.05)}px;
        }

        &:nth-child(1) {
            animation-delay: -0.036s;
            &::after {
                top: ${Math.round(size * 0.7875)}px;
                left: ${Math.round(size * 0.7875)}px;
            }
        }

        &:nth-child(2) {
            animation-delay: -0.072s;
            &::after {
                top: ${Math.round(size * 0.85)}px;
                left: ${Math.round(size * 0.7)}px;
            }
        }

        &:nth-child(3) {
            animation-delay: -0.108s;
            &::after {
                top: ${Math.round(size * 0.8875)}px;
                left: ${Math.round(size * 0.6)}px;
            }
        }

        &:nth-child(4) {
            animation-delay: -0.144s;
            &::after {
                top: ${Math.round(size * 0.9)}px;
                left: ${Math.round(size * 0.5)}px;
            }
        }

        &:nth-child(5) {
            animation-delay: -0.18s;
            &::after {
                top: ${Math.round(size * 0.8875)}px;
                left: ${Math.round(size * 0.4)}px;
            }
        }

        &:nth-child(6) {
            animation-delay: -0.216s;
            &::after {
                top: ${Math.round(size * 0.85)}px;
                left: ${Math.round(size * 0.3)}px;
            }
        }

        &:nth-child(7) {
            animation-delay: -0.252s;
            &::after {
                top: ${Math.round(size * 0.7875)}px;
                left: ${Math.round(size * 0.2125)}px;
            }
        }

        &:nth-child(8) {
            animation-delay: -0.288s;
            &::after {
                top: ${Math.round(size * 0.7)}px;
                left: ${Math.round(size * 0.15)}px;
            }
        }

        @keyframes SafariUI-loader-roller-rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;
});

const SpinnerWrapper = material.styled('div')(_ref => {
  let {
    size
  } = _ref;
  return material.css`
        color: official;
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `;
});
const SpinnerDot = material.styled('div')(_ref2 => {
  let {
    size,
    color
  } = _ref2;
  return material.css`
        transform-origin: ${Math.round(size * 0.5)}px ${Math.round(size * 0.5)}px;
        animation: SafariUI-loader-spinner 1.2s linear infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            top: ${Math.round(size * 0.0375)}px;
            left: ${Math.round(size * 0.4625)}px;
            width: ${Math.round(size * 0.075)}px;
            height: ${Math.round(size * 0.225)}px;
            border-radius: 20%;
            background: ${color};
        }

        &:nth-child(1) {
            transform: rotate(0deg);
            animation-delay: -1.1s;
        }

        &:nth-child(2) {
            transform: rotate(30deg);
            animation-delay: -1s;
        }

        &:nth-child(3) {
            transform: rotate(60deg);
            animation-delay: -0.9s;
        }

        &:nth-child(4) {
            transform: rotate(90deg);
            animation-delay: -0.8s;
        }

        &:nth-child(5) {
            transform: rotate(120deg);
            animation-delay: -0.7s;
        }

        &:nth-child(6) {
            transform: rotate(150deg);
            animation-delay: -0.6s;
        }

        &:nth-child(7) {
            transform: rotate(180deg);
            animation-delay: -0.5s;
        }

        &:nth-child(8) {
            transform: rotate(210deg);
            animation-delay: -0.4s;
        }

        &:nth-child(9) {
            transform: rotate(240deg);
            animation-delay: -0.3s;
        }

        &:nth-child(10) {
            transform: rotate(270deg);
            animation-delay: -0.2s;
        }

        &:nth-child(11) {
            transform: rotate(300deg);
            animation-delay: -0.1s;
        }

        &:nth-child(12) {
            transform: rotate(330deg);
            animation-delay: 0s;
        }

        @keyframes SafariUI-loader-spinner {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    `;
});

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
  const theme = material.useTheme();
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
  return /*#__PURE__*/jsxRuntime.jsxs(LoaderWrapper$1, {
    className: SafariUILoader,
    children: [variant === 'ellipsis' && /*#__PURE__*/jsxRuntime.jsxs(EllipsisWrapper, {
      size: sizeInPixels,
      className: SafariUILoaderEllipsis,
      children: [/*#__PURE__*/jsxRuntime.jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      }), /*#__PURE__*/jsxRuntime.jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      }), /*#__PURE__*/jsxRuntime.jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      }), /*#__PURE__*/jsxRuntime.jsx(EllipsisDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderEllipsisDot
      })]
    }), variant === 'ellipsis-rolling' && /*#__PURE__*/jsxRuntime.jsx(EllipsisRollingWrapper, {
      size: sizeInPixels,
      color: colorInHex,
      className: SafariUILoaderEllipsisRolling
    }), variant === 'spinner' && /*#__PURE__*/jsxRuntime.jsxs(SpinnerWrapper, {
      size: sizeInPixels,
      className: SafariUILoaderSpinner,
      children: [/*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      }), /*#__PURE__*/jsxRuntime.jsx(SpinnerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderSpinnerDot
      })]
    }), variant === 'roller' && /*#__PURE__*/jsxRuntime.jsxs(RollerWrapper, {
      size: sizeInPixels,
      className: SafariUILoaderRoller,
      children: [/*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      }), /*#__PURE__*/jsxRuntime.jsx(RollerDot, {
        size: sizeInPixels,
        color: colorInHex,
        className: SafariUILoaderRollerDot
      })]
    }), variant === 'default' && /*#__PURE__*/jsxRuntime.jsx(material.CircularProgress, {
      color: colorMatchesVariant ? color : 'inherit',
      size: sizeInPixels
    })]
  });
};
var Loader$1 = Loader;

const Content = material.styled('div')(_ref => {
  let {
    isLoading
  } = _ref;
  return material.css`
        opacity: ${isLoading ? 0 : 1};
    `;
});

const LoaderWrapper = material.styled('div')(_ref => {
  let {
    isLoading
  } = _ref;
  return material.css`
        opacity: ${isLoading ? 1 : 0};
        position: absolute;
        display: flex;
        align-items: center;
    `;
});

const MUIButton = material.styled(material.Button)(material.css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`);

const {
  SafariUIButton
} = classNames;

/**
 * @typedef {Object} ButtonProps
 * @property {boolean} [isLoading]
 * @property {'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner'} [loaderVariant]
 * @property {React.ReactNode} [children]
 */

/**
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
const Button = _ref => {
  let {
    children,
    isLoading,
    loaderVariant = 'default',
    ...props
  } = _ref;
  const {
    palette,
    typography
  } = material.useTheme();
  const remValue = typography.fontSize ?? 16;
  return /*#__PURE__*/jsxRuntime.jsxs(MUIButton, {
    className: SafariUIButton,
    ...props,
    children: [/*#__PURE__*/jsxRuntime.jsx(LoaderWrapper, {
      "aria-hidden": !isLoading,
      isLoading: isLoading,
      children: /*#__PURE__*/jsxRuntime.jsx(Loader$1, {
        variant: loaderVariant,
        size: (() => {
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
        })(),
        color: (() => {
          const {
            color,
            variant,
            disabled
          } = props;
          if (disabled) return palette.action.disabled;
          if (color === 'primary' && variant === 'contained') return palette.primary.contrastText;
          if (color === 'primary' && (variant === 'outlined' || variant === 'text')) return palette.primary.main;
          if (color === 'secondary' && variant === 'contained') return palette.secondary.contrastText;
          if (color === 'secondary' && (variant === 'outlined' || variant === 'text')) return palette.secondary.main;
          if (color === 'success' && variant === 'contained') return palette.success.contrastText;
          if (color === 'success' && (variant === 'outlined' || variant === 'text')) return palette.success.main;
          if (color === 'error' && variant === 'contained') return palette.error.contrastText;
          if (color === 'error' && (variant === 'outlined' || variant === 'text')) return palette.error.main;
          if (color === 'warning' && variant === 'contained') return palette.warning.contrastText;
          if (color === 'warning' && (variant === 'outlined' || variant === 'text')) return palette.warning.main;
          if (color === 'info' && variant === 'contained') return palette.info.contrastText;
          if (color === 'info' && (variant === 'outlined' || variant === 'text')) return palette.info.main;
          if (variant === 'contained') return palette.common.white;
          if (variant === 'outlined') return palette.text.primary;
          if (variant === 'text') return palette.text.primary;
          return color;
        })()
      })
    }), /*#__PURE__*/jsxRuntime.jsx(Content, {
      "aria-hidden": isLoading,
      isLoading: isLoading,
      children: children
    })]
  });
};
var Button$1 = Button;

exports.Button = Button$1;
exports.Loader = Loader$1;
