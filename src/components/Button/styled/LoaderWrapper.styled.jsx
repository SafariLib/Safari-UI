'use client';

import { css, styled } from '@mui/material';

export const LoaderWrapper = styled('div')(
    ({ isLoading }) => css`
        opacity: ${isLoading ? 1 : 0};
        position: absolute;
        display: flex;
        align-items: center;
    `,
);
