'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RingWrapper = styled('div')(
    props => css`
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    `,
);

export const RingTrail = styled('div')(
    props => css`
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: SafariUI-loader-ring-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;

        &::nth-child(1) {
            animation-delay: -0.45s;
        }

        &::nth-child(2) {
            animation-delay: -0.3s;
        }

        &::nth-child(3) {
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
