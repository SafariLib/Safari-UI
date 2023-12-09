import { css, styled } from '@mui/material';

export default styled('div')<{ size: number }>(
    ({ size, color }) =>
        css`
            width: ${Math.round(size * 0.1625)}px;
            height: ${Math.round(size * 0.1625)}px;
            border-radius: 50%;
            background: ${color};
            position: relative;

            &:before {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${color};
                transform: rotate(0deg) translate(${Math.round(size * 0.1625 * 1.85)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
            }
            &:after {
                content: '';
                position: absolute;
                border-radius: 50%;
                inset: 0;
                background: ${color};
                transform: rotate(0deg) translate(${Math.round(size * 0.3)}px);
                animation: SafariUI-loader-ellipsisRolling-rotate 1s ease infinite;
                animation-delay: 0.5s;
            }

            @keyframes SafariUI-loader-ellipsisRolling-rotate {
                100% {
                    transform: rotate(360deg) translate(${Math.round(size * 0.3)}px);
                }
            }
        `,
);
