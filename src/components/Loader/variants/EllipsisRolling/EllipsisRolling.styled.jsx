'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const EllipsisRollingWrapper = styled('div')(
    props => css`
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            border-radius: 50%;
            inset: 0;
            background: #fff;
            transform: rotate(0deg) translate(30px);
            animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
        }
        &::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            inset: 0;
            background: #fff;
            transform: rotate(0deg) translate(30px);
            animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            animation-delay: 0.5s;
        }

        @keyframes SafariUI-loader-ellipsisRolling-rotate {
            100% {
                transform: rotate(360deg) translate(30px);
            }
        }
    `,
);
