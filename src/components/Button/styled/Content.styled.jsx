'use client';

import { css, styled } from '@mui/material';

export const Content = styled('div')(
    ({ isLoading }) => css`
        opacity: ${isLoading ? 0 : 1};
    `,
);
