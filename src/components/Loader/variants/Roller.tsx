import { css, styled } from '@mui/material';

export default styled('div')<{ size: number }>(
    ({ size }) => css`
        display: inline-block;
        position: relative;
        width: ${Math.round(size)}px;
        height: ${Math.round(size)}px;
    `,
);

export const RollerDot = styled('div')<{ size: number }>(
    ({ size, color }) => css`
        transform-origin: ${Math.round(size * 0.5)}px ${Math.round(size * 0.5)}px;
        animation: SafariUI-loader-roller-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

        &:after {
            content: ' ';
            display: block;
            position: absolute;
            width: ${Math.round(size * 0.0875)}px;
            height: ${Math.round(size * 0.0875)}px;
            border-radius: 50%;
            background: ${color};
            margin: -${Math.round(size * 0.05)}px 0 0 -${Math.round(size * 0.05)}px;
        }

        &:nth-child(1) {
            animation-delay: -0.036s;
            &::after {
                top: ${Math.round(size * 0.7875)}px;
                left: ${Math.round(size * 0.7875)}px;
            }
        }

        &:nth-child(2) {
            animation-delay: -0.072s;
            &::after {
                top: ${Math.round(size * 0.85)}px;
                left: ${Math.round(size * 0.7)}px;
            }
        }

        &:nth-child(3) {
            animation-delay: -0.108s;
            &::after {
                top: ${Math.round(size * 0.8875)}px;
                left: ${Math.round(size * 0.6)}px;
            }
        }

        &:nth-child(4) {
            animation-delay: -0.144s;
            &::after {
                top: ${Math.round(size * 0.9)}px;
                left: ${Math.round(size * 0.5)}px;
            }
        }

        &:nth-child(5) {
            animation-delay: -0.18s;
            &::after {
                top: ${Math.round(size * 0.8875)}px;
                left: ${Math.round(size * 0.4)}px;
            }
        }

        &:nth-child(6) {
            animation-delay: -0.216s;
            &::after {
                top: ${Math.round(size * 0.85)}px;
                left: ${Math.round(size * 0.3)}px;
            }
        }

        &:nth-child(7) {
            animation-delay: -0.252s;
            &::after {
                top: ${Math.round(size * 0.7875)}px;
                left: ${Math.round(size * 0.2125)}px;
            }
        }

        &:nth-child(8) {
            animation-delay: -0.288s;
            &::after {
                top: ${Math.round(size * 0.7)}px;
                left: ${Math.round(size * 0.15)}px;
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
    `,
);
