'use client';

import { css, styled } from '@mui/material';

export const RingWrapper = styled('div')(
    ({ size }) => css`
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `,
);

export const RingTrail = styled('div')(
    ({ size, color }) => css`
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${Math.round(size * 0.8)}px;
        height: ${Math.round(size * 0.8)}px;
        margin: ${Math.round(size * 0.1)}px;
        border: ${Math.round(size * 0.075)}px solid ${color};
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
    `,
);
