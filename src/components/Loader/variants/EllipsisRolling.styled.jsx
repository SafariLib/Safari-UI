'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const EllipsisRollingWrapper = styled('div')(
    ({ size, color }) => css`
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: ${color};
        position: relative;

        &:before {
            content: '';
            position: absolute;
            border-radius: 50%;
            inset: 0;
            background: ${color};
            transform: rotate(0deg) translate(24px);
            animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
        }
        &:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            inset: 0;
            background: ${color};
            transform: rotate(0deg) translate(24px);
            animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            animation-delay: 0.5s;
        }

        @keyframes SafariUI-loader-ellipsisRolling-rotate {
            100% {
                transform: rotate(360deg) translate(24px);
            }
        }
    `,
);
