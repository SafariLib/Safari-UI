"use strict";var e=require("@mui/material"),a=require("react");const t={SafariUI:"SafariUI",SafariUIDisabled:"SafariUI-disabled",SafariUIButton:"SafariUI-btn",SafariUIButtonText:"SafariUI-btn-text",SafariUIButtonOutlined:"SafariUI-btn-outlined",SafariUILoader:"SafariUI-loader",SafariUILoaderEllipsis:"SafariUI-loader-ellipsis",SafariUILoaderEllipsisDot:"SafariUI-loader-ellipsis-dot",SafariUILoaderEllipsisRolling:"SafariUI-loader-ellipsisRolling",SafariUILoaderSpinner:"SafariUI-loader-spinner",SafariUILoaderSpinnerDot:"SafariUI-loader-spinner-dot",SafariUILoaderRoller:"SafariUI-loader-roller",SafariUILoaderRollerDot:"SafariUI-loader-roller-dot"};var r=e.styled("div")((({size:a})=>e.css`
        display: inline-block;
        position: relative;
        width: ${Math.round(a)}px;
        height: ${Math.round(a)}px;
    `));const i=e.styled("div")((({size:a,color:t})=>e.css`
        position: absolute;
        background: ${t};
        border-radius: 50%;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        top: ${Math.round(.4125*a)}px;
        width: ${Math.round(.1625*a)}px;
        height: ${Math.round(.1625*a)}px;

        &:nth-of-type(1) {
            left: ${Math.round(.1*a)}px;
            animation: SafariUI-loader-ellipsis1 0.6s infinite;
        }

        &:nth-of-type(2) {
            left: ${Math.round(.1*a)}px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &:nth-of-type(3) {
            left: ${Math.round(.4*a)}px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &:nth-of-type(4) {
            left: ${Math.round(.7*a)}px;
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
                transform: translate(${Math.round(.3*a)}px, 0);
            }
        }
    `));var n=e.styled("div")((({size:a})=>e.css`
        display: inline-block;
        position: relative;
        width: ${Math.round(a)}px;
        height: ${Math.round(a)}px;
    `));const o=e.styled("div")((({size:a,color:t})=>e.css`
        transform-origin: ${Math.round(.5*a)}px ${Math.round(.5*a)}px;
        animation: SafariUI-loader-roller-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            width: ${Math.round(.0875*a)}px;
            height: ${Math.round(.0875*a)}px;
            border-radius: 50%;
            background: ${t};
            margin: -${Math.round(.05*a)}px 0 0 -${Math.round(.05*a)}px;
        }

        &:nth-child(1) {
            animation-delay: -0.036s;
            &::after {
                top: ${Math.round(.7875*a)}px;
                left: ${Math.round(.7875*a)}px;
            }
        }

        &:nth-child(2) {
            animation-delay: -0.072s;
            &::after {
                top: ${Math.round(.85*a)}px;
                left: ${Math.round(.7*a)}px;
            }
        }

        &:nth-child(3) {
            animation-delay: -0.108s;
            &::after {
                top: ${Math.round(.8875*a)}px;
                left: ${Math.round(.6*a)}px;
            }
        }

        &:nth-child(4) {
            animation-delay: -0.144s;
            &::after {
                top: ${Math.round(.9*a)}px;
                left: ${Math.round(.5*a)}px;
            }
        }

        &:nth-child(5) {
            animation-delay: -0.18s;
            &::after {
                top: ${Math.round(.8875*a)}px;
                left: ${Math.round(.4*a)}px;
            }
        }

        &:nth-child(6) {
            animation-delay: -0.216s;
            &::after {
                top: ${Math.round(.85*a)}px;
                left: ${Math.round(.3*a)}px;
            }
        }

        &:nth-child(7) {
            animation-delay: -0.252s;
            &::after {
                top: ${Math.round(.7875*a)}px;
                left: ${Math.round(.2125*a)}px;
            }
        }

        &:nth-child(8) {
            animation-delay: -0.288s;
            &::after {
                top: ${Math.round(.7*a)}px;
                left: ${Math.round(.15*a)}px;
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
    `));var s=e.styled("div")((({size:a,color:t})=>e.css`
            width: ${Math.round(.1625*a)}px;
            height: ${Math.round(.1625*a)}px;
            border-radius: 50%;
            background: ${t};
            position: relative;

            &:before {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${t};
                transform: rotate(0deg) translate(${Math.round(.1625*a*1.85)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            }
            &:after {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${t};
                transform: rotate(0deg) translate(${Math.round(.3*a)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
                animation-delay: 0.5s;
            }

            @keyframes SafariUI-loader-ellipsisRolling-rotate {
                100% {
                    transform: rotate(360deg) translate(${Math.round(.3*a)}px);
                }
            }
        `)),l=e.styled("div")((({size:a})=>e.css`
        color: official;
        display: inline-block;
        position: relative;
        width: ${Math.round(a)}px;
        height: ${Math.round(a)}px;
    `));const d=e.styled("div")((({size:a,color:t})=>e.css`
        transform-origin: ${Math.round(.5*a)}px ${Math.round(.5*a)}px;
        animation: SafariUI-loader-spinner 1.2s linear infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            top: ${Math.round(.0375*a)}px;
            left: ${Math.round(.4625*a)}px;
            width: ${Math.round(.075*a)}px;
            height: ${Math.round(.225*a)}px;
            border-radius: 20%;
            background: ${t};
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
    `)),{SafariUILoader:c,SafariUILoaderEllipsis:m,SafariUILoaderEllipsisDot:f,SafariUILoaderEllipsisRolling:u,SafariUILoaderRoller:p,SafariUILoaderRollerDot:h,SafariUILoaderSpinner:y,SafariUILoaderSpinnerDot:x}=t,g=e.styled("div")((()=>e.css`
        display: flex;
        align-items: center;
        justify-content: center;
    `));var $=({variant:t="ring",size:$="medium",color:S="primary"})=>{const I=e.useTheme(),M=(()=>{switch($){case"small":return 40;case"medium":return 80;case"large":return 120;default:return"number"==typeof $?$:(console.warn(`Invalid size prop: ${$}. Defaulting to medium size.`),80)}})(),U="primary"===S||"secondary"===S||"success"===S||"warning"===S||"error"===S||"info"===S,z=(()=>{switch(S){case"primary":return I.palette.primary.main;case"secondary":return I.palette.secondary.main;case"success":return I.palette.success.main;case"warning":return I.palette.warning.main;case"error":return I.palette.error.main;case"info":return I.palette.info.main;default:return(e=>/^#([0-9A-F]{3}){1,2}$/i.test(e))(S)?S:(console.warn(`Invalid color prop: ${S}. Defaulting to primary color.`),I.palette.primary.main)}})();return a.createElement(g,{className:c},"ellipsis"===t&&a.createElement(r,{size:M,className:m},a.createElement(i,{size:M,color:z,className:f}),a.createElement(i,{size:M,color:z,className:f}),a.createElement(i,{size:M,color:z,className:f}),a.createElement(i,{size:M,color:z,className:f})),"ellipsis-rolling"===t&&a.createElement(s,{size:M,color:z,className:u}),"spinner"===t&&a.createElement(l,{size:M,className:y},a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x}),a.createElement(d,{size:M,color:z,className:x})),"roller"===t&&a.createElement(n,{size:M,className:p},a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h}),a.createElement(o,{size:M,color:z,className:h})),"default"===t&&a.createElement(e.CircularProgress,{color:U?S:"inherit",size:M}))};const{SafariUIButton:S}=t,I=e.styled("div")((({isLoading:a})=>e.css`
        opacity: ${a?1:0};
        position: absolute;
        display: flex;
        align-items: center;
    `)),M=e.styled("div")((({isLoading:a,textTransform:t})=>e.css`
        opacity: ${a?0:1};
        text-transform: ${t};
    `)),U=e.styled(e.Button)(e.css`
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
`);var z=({children:t,isLoading:r,loaderVariant:i="default",elevation:n,textTransform:o="initial",size:s,...l})=>{const{palette:d,typography:c}=e.useTheme(),m=c.fontSize??16;return a.createElement(U,{className:S,disableElevation:!n,size:s,...l},a.createElement(I,{"aria-hidden":!r,isLoading:r},a.createElement($,{variant:i,size:(()=>{if("default"===i)switch(s){case"small":return 1.2*m;case"large":return m*(3*.6);default:return 1.5*m}else if("spinner"===i)switch(s){case"small":return 1.4*m;case"large":return m*(3*.7);default:return 1.75*m}else if("ellipsis"===i)switch(s){case"small":return 2*m;case"large":return 3*m;default:return 2.5*m}else switch(s){case"small":return 1.6*m;case"large":return m*(3*.8);default:return 2*m}})(),color:(()=>{const{color:e,variant:a,disabled:t}=l;return t?d.action.disabled:"primary"===e&&"contained"===a?d.primary.contrastText:"primary"!==e||"outlined"!==a&&"text"!==a?"secondary"===e&&"contained"===a?d.secondary.contrastText:"secondary"!==e||"outlined"!==a&&"text"!==a?"success"===e&&"contained"===a?d.success.contrastText:"success"!==e||"outlined"!==a&&"text"!==a?"error"===e&&"contained"===a?d.error.contrastText:"error"!==e||"outlined"!==a&&"text"!==a?"warning"===e&&"contained"===a?d.warning.contrastText:"warning"!==e||"outlined"!==a&&"text"!==a?"info"===e&&"contained"===a?d.info.contrastText:"info"!==e||"outlined"!==a&&"text"!==a?"contained"===a?d.common.white:"outlined"===a||"text"===a?d.text.primary:e:d.info.main:d.warning.main:d.error.main:d.success.main:d.secondary.main:d.primary.main})()})),a.createElement(M,{"aria-hidden":r,isLoading:r,textTransform:o},t))};exports.Button=z,exports.Loader=$;
//# sourceMappingURL=index.cjs.js.map
