import { ButtonProps } from '@mui/material';
import React, { FC } from 'react';

interface SafariButtonProps extends Omit<ButtonProps, 'disableElevation'> {
    isLoading?: boolean | undefined;
    loaderVariant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | undefined;
    elevation?: boolean;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial';
}
/**
 * Extends MUI Button with a loading state.
 * - `isLoading` _boolean_
 *
 * If true, the button's children will be disabled and show a loader.
 *
 * - `loaderVariant` _'default'_ | _'ellipsis'_ | _'ellipsis-rolling'_ | _'spinner'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **MUI Button API**
 *
 * https://mui.com/material-ui/api/button/
 */
declare const SafariButton: FC<SafariButtonProps>;

interface SafariLoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller' | undefined;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | React.CSSProperties['color'] | undefined;
}
/**
 * Pure CSS loaders.
 * - `size` _'small'_ | _'medium'_ | _'large'_ | number | _undefined_
 *
 * The size of the loader. If type is number it will be considered as pixels
 *
 * - `variant` _'default'_ | _'ellipsis'_ | _'ellipsis-rolling'_ | _'spinner'_ | _'roller'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **Source**
 *  - https://loading.io/css/
 *  - https://cssloaders.github.io/
 */
declare const SafariLoader: FC<SafariLoaderProps>;

export { SafariButton, type SafariButtonProps, SafariLoader, type SafariLoaderProps };
