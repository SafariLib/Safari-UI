'use client';

import { css, styled } from '@mui/material';

export const RingWrapper = styled('div')(
    ({ size }) => css`
        display: inline-block;
        position: relative;
        ${(() => {
            switch (size) {
                case 'small':
                    return css`
                        width: 40px;
                        height: 40px;
                    `;
                case 'medium':
                    return css`
                        width: 80px;
                        height: 80px;
                    `;
                case 'large':
                    return css`
                        width: 160px;
                        height: 160px;
                    `;
                default:
                    return css`
                        width: 80px;
                        height: 80px;
                    `;
            }
        })()}
    `,
);

export const RingTrail = styled('div')(({ size, color }) => {
    let ringSize, border, margin;

    switch (size) {
        case 'small':
            ringSize = '32px';
            border = '4px';
            margin = '4px';
            break;
        case 'medium':
            ringSize = '64px';
            border = '8px';
            margin = '8px';
            break;
        case 'large':
            ringSize = '128px';
            border = '16px';
            margin = '16px';
            break;
        default:
            ringSize = '64px';
            border = '8px';
            margin = '8px';
    }

    return css`
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${ringSize};
        height: ${ringSize};
        margin: ${margin};
        border: ${border} solid ${color};
        border-radius: 50%;
        animation: SafariUI-loader-ring-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${color} transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }

        @keyframes SafariUI-loader-ring-rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;
});
