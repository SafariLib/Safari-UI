import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const EllipsisWrapper = styled('div')(
    props => css`
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    `,
);

export const EllipsisDot = styled('div')(
    props => css`
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);

        &::nth-child(1) {
            left: 8px;
            animation: SafariUI-loader-ellipsis1 0.6s infinite;
        }

        &::nth-child(2) {
            left: 8px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &::nth-child(3) {
            left: 32px;
            animation: SafariUI-loader-ellipsis2 0.6s infinite;
        }

        &::nth-child(4) {
            left: 56px;
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
                transform: translate(24px, 0);
            }
        }
    `,
);
