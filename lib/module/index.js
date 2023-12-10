import{styled as e,css as a,useTheme as t,CircularProgress as r,Button as i}from"@mui/material";import n from"react";const o={SafariUI:"SafariUI",SafariUIDisabled:"SafariUI-disabled",SafariUIButton:"SafariUI-btn",SafariUIButtonText:"SafariUI-btn-text",SafariUIButtonOutlined:"SafariUI-btn-outlined",SafariUILoader:"SafariUI-loader",SafariUILoaderEllipsis:"SafariUI-loader-ellipsis",SafariUILoaderEllipsisDot:"SafariUI-loader-ellipsis-dot",SafariUILoaderEllipsisRolling:"SafariUI-loader-ellipsisRolling",SafariUILoaderSpinner:"SafariUI-loader-spinner",SafariUILoaderSpinnerDot:"SafariUI-loader-spinner-dot",SafariUILoaderRoller:"SafariUI-loader-roller",SafariUILoaderRollerDot:"SafariUI-loader-roller-dot"};var l=e("div")((({size:e})=>a`
        display: inline-block;
        position: relative;
        width: ${Math.round(e)}px;
        height: ${Math.round(e)}px;
    `));const s=e("div")((({size:e,color:t})=>a`
        position: absolute;
        background: ${t};
        border-radius: 50%;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        top: ${Math.round(.4125*e)}px;
        width: ${Math.round(.1625*e)}px;
        height: ${Math.round(.1625*e)}px;

        &:nth-of-type(1) {
            left: ${Math.round(.1*e)}px;
            animation: SafariUI-loader-ellipsis1 0.6s infinite;
        }

        &:nth-of-type(2) {
            left: ${Math.round(.1*e)}px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &:nth-of-type(3) {
            left: ${Math.round(.4*e)}px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &:nth-of-type(4) {
            left: ${Math.round(.7*e)}px;
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
                transform: translate(${Math.round(.3*e)}px, 0);
            }
        }
    `));var d=e("div")((({size:e})=>a`
        display: inline-block;
        position: relative;
        width: ${Math.round(e)}px;
        height: ${Math.round(e)}px;
    `));const c=e("div")((({size:e,color:t})=>a`
        transform-origin: ${Math.round(.5*e)}px ${Math.round(.5*e)}px;
        animation: SafariUI-loader-roller-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            width: ${Math.round(.0875*e)}px;
            height: ${Math.round(.0875*e)}px;
            border-radius: 50%;
            background: ${t};
            margin: -${Math.round(.05*e)}px 0 0 -${Math.round(.05*e)}px;
        }

        &:nth-child(1) {
            animation-delay: -0.036s;
            &::after {
                top: ${Math.round(.7875*e)}px;
                left: ${Math.round(.7875*e)}px;
            }
        }

        &:nth-child(2) {
            animation-delay: -0.072s;
            &::after {
                top: ${Math.round(.85*e)}px;
                left: ${Math.round(.7*e)}px;
            }
        }

        &:nth-child(3) {
            animation-delay: -0.108s;
            &::after {
                top: ${Math.round(.8875*e)}px;
                left: ${Math.round(.6*e)}px;
            }
        }

        &:nth-child(4) {
            animation-delay: -0.144s;
            &::after {
                top: ${Math.round(.9*e)}px;
                left: ${Math.round(.5*e)}px;
            }
        }

        &:nth-child(5) {
            animation-delay: -0.18s;
            &::after {
                top: ${Math.round(.8875*e)}px;
                left: ${Math.round(.4*e)}px;
            }
        }

        &:nth-child(6) {
            animation-delay: -0.216s;
            &::after {
                top: ${Math.round(.85*e)}px;
                left: ${Math.round(.3*e)}px;
            }
        }

        &:nth-child(7) {
            animation-delay: -0.252s;
            &::after {
                top: ${Math.round(.7875*e)}px;
                left: ${Math.round(.2125*e)}px;
            }
        }

        &:nth-child(8) {
            animation-delay: -0.288s;
            &::after {
                top: ${Math.round(.7*e)}px;
                left: ${Math.round(.15*e)}px;
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
    `));var m=e("div")((({size:e,color:t})=>a`
            width: ${Math.round(.1625*e)}px;
            height: ${Math.round(.1625*e)}px;
            border-radius: 50%;
            background: ${t};
            position: relative;

            &:before {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${t};
                transform: rotate(0deg) translate(${Math.round(.1625*e*1.85)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            }
            &:after {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${t};
                transform: rotate(0deg) translate(${Math.round(.3*e)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
                animation-delay: 0.5s;
            }

            @keyframes SafariUI-loader-ellipsisRolling-rotate {
                100% {
                    transform: rotate(360deg) translate(${Math.round(.3*e)}px);
                }
            }
        `)),f=e("div")((({size:e})=>a`
        color: official;
        display: inline-block;
        position: relative;
        width: ${Math.round(e)}px;
        height: ${Math.round(e)}px;
    `));const p=e("div")((({size:e,color:t})=>a`
        transform-origin: ${Math.round(.5*e)}px ${Math.round(.5*e)}px;
        animation: SafariUI-loader-spinner 1.2s linear infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            top: ${Math.round(.0375*e)}px;
            left: ${Math.round(.4625*e)}px;
            width: ${Math.round(.075*e)}px;
            height: ${Math.round(.225*e)}px;
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
    `)),{SafariUILoader:u,SafariUILoaderEllipsis:h,SafariUILoaderEllipsisDot:x,SafariUILoaderEllipsisRolling:g,SafariUILoaderRoller:y,SafariUILoaderRollerDot:$,SafariUILoaderSpinner:S,SafariUILoaderSpinnerDot:I}=o,M=e("div")((()=>a`
        display: flex;
        align-items: center;
        justify-content: center;
    `));var U=({variant:e="ring",size:a="medium",color:i="primary"})=>{const o=t(),U=(()=>{switch(a){case"small":return 40;case"medium":return 80;case"large":return 120;default:return"number"==typeof a?a:(console.warn(`Invalid size prop: ${a}. Defaulting to medium size.`),80)}})(),z="primary"===i||"secondary"===i||"success"===i||"warning"===i||"error"===i||"info"===i,E=(()=>{switch(i){case"primary":return o.palette.primary.main;case"secondary":return o.palette.secondary.main;case"success":return o.palette.success.main;case"warning":return o.palette.warning.main;case"error":return o.palette.error.main;case"info":return o.palette.info.main;default:return(e=>/^#([0-9A-F]{3}){1,2}$/i.test(e))(i)?i:(console.warn(`Invalid color prop: ${i}. Defaulting to primary color.`),o.palette.primary.main)}})();return n.createElement(M,{className:u},"ellipsis"===e&&n.createElement(l,{size:U,className:h},n.createElement(s,{size:U,color:E,className:x}),n.createElement(s,{size:U,color:E,className:x}),n.createElement(s,{size:U,color:E,className:x}),n.createElement(s,{size:U,color:E,className:x})),"ellipsis-rolling"===e&&n.createElement(m,{size:U,color:E,className:g}),"spinner"===e&&n.createElement(f,{size:U,className:S},n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I}),n.createElement(p,{size:U,color:E,className:I})),"roller"===e&&n.createElement(d,{size:U,className:y},n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$}),n.createElement(c,{size:U,color:E,className:$})),"default"===e&&n.createElement(r,{color:z?i:"inherit",size:U}))};const{SafariUIButton:z}=o,E=e("div")((({isLoading:e})=>a`
        opacity: ${e?1:0};
        position: absolute;
        display: flex;
        align-items: center;
    `)),b=e("div")((({isLoading:e,textTransform:t})=>a`
        opacity: ${e?0:1};
        text-transform: ${t};
    `)),N=e(i)(a`
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
`);var v=({children:e,isLoading:a,loaderVariant:r="default",elevation:i,textTransform:o="initial",size:l,...s})=>{const{palette:d,typography:c}=t(),m=c.fontSize??16;return n.createElement(N,{className:z,disableElevation:!i,size:l,...s},n.createElement(E,{"aria-hidden":!a,isLoading:a},n.createElement(U,{variant:r,size:(()=>{if("default"===r)switch(l){case"small":return 1.2*m;case"large":return m*(3*.6);default:return 1.5*m}else if("spinner"===r)switch(l){case"small":return 1.4*m;case"large":return m*(3*.7);default:return 1.75*m}else if("ellipsis"===r)switch(l){case"small":return 2*m;case"large":return 3*m;default:return 2.5*m}else switch(l){case"small":return 1.6*m;case"large":return m*(3*.8);default:return 2*m}})(),color:(()=>{const{color:e,variant:a,disabled:t}=s;return t?d.action.disabled:"primary"===e&&"contained"===a?d.primary.contrastText:"primary"!==e||"outlined"!==a&&"text"!==a?"secondary"===e&&"contained"===a?d.secondary.contrastText:"secondary"!==e||"outlined"!==a&&"text"!==a?"success"===e&&"contained"===a?d.success.contrastText:"success"!==e||"outlined"!==a&&"text"!==a?"error"===e&&"contained"===a?d.error.contrastText:"error"!==e||"outlined"!==a&&"text"!==a?"warning"===e&&"contained"===a?d.warning.contrastText:"warning"!==e||"outlined"!==a&&"text"!==a?"info"===e&&"contained"===a?d.info.contrastText:"info"!==e||"outlined"!==a&&"text"!==a?"contained"===a?d.common.white:"outlined"===a||"text"===a?d.text.primary:e:d.info.main:d.warning.main:d.error.main:d.success.main:d.secondary.main:d.primary.main})()})),n.createElement(b,{"aria-hidden":a,isLoading:a,textTransform:o},e))};export{v as Button,U as Loader};
//# sourceMappingURL=index.js.map
