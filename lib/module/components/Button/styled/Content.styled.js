'use client';
import { styled, css } from '@mui/material';

const Content = styled('div')(_ref => {
  let {
    isLoading
  } = _ref;
  return css`
        opacity: ${isLoading ? 0 : 1};
    `;
});

export { Content };
