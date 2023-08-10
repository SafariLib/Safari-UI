'use client';
import { styled, css } from '@mui/material';

const LoaderWrapper = styled('div')(_ref => {
  let {
    isLoading
  } = _ref;
  return css`
        opacity: ${isLoading ? 1 : 0};
        position: absolute;
        display: flex;
        align-items: center;
    `;
});

export { LoaderWrapper };
