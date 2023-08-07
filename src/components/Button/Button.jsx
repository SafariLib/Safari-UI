'use client';

import { Button as MUIButton } from '@mui/material';
import React from 'react';
import { classNames } from '../../utils';

const { SafariUIButton } = classNames;

/**
 * @typedef {Object} ButtonProps
 * @property {boolean} [isLoading]
 * @property {'default'} [loaderVariant]
 * @property {React.ReactNode} [children]
 */

/**
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
const Button = ({ children, isLoading, loaderVariant = 'default', ...props }) => (
    <MUIButton className={SafariUIButton} {...props}>
        {isLoading ? '' : children}
    </MUIButton>
);

export default Button;
