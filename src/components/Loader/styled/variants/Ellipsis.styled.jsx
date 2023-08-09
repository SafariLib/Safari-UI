'use client';

import { css, styled } from '@mui/material';

export const EllipsisWrapper = styled('div')(
    ({ size }) => css`
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `,
);

export const EllipsisDot = styled('div')(
    ({ size, color }) => css`
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
    `,
);
