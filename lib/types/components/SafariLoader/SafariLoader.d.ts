import React, { FC } from 'react';
export interface SafariLoaderProps {
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
export declare const Wrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default SafariLoader;
