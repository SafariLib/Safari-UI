'use client';

import { css, styled } from '@mui/material';

export const SpinnerWrapper = styled('div')(
    ({ size }) => css`
        color: official;
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `,
);

export const SpinnerDot = styled('div')(
    ({ size, color }) => css`
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
    `,
);
