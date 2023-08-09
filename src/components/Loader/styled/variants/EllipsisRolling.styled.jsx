'use client';

import { css, styled } from '@mui/material';

export const EllipsisRollingWrapper = styled('div')(({ size, color }) => {
    let dotSize, translate;

    switch (size) {
        case 'small':
            dotSize = '6px';
            translate = '10px';
            break;
        case 'medium':
            dotSize = '13px';
            translate = '24px';
            break;
        case 'large':
            dotSize = '26px';
            translate = '48px';
            break;
        default:
            dotSize = '13px';
            translate = '24px';
    }

    return css`
        width: ${dotSize};
        height: ${dotSize};
        border-radius: 50%;
        background: ${color};
        position: relative;

        &:before {
            content: '';
            position: absolute;
            border-radius: 50%;
            inset: 0;
            background: ${color};
            transform: rotate(0deg) translate(${translate});
            animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
        }
        &:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            inset: 0;
            background: ${color};
            transform: rotate(0deg) translate(${translate});
            animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            animation-delay: 0.5s;
        }

        @keyframes SafariUI-loader-ellipsisRolling-rotate {
            100% {
                transform: rotate(360deg) translate(${translate});
            }
        }
    `;
});
