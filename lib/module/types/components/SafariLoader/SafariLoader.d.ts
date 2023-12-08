import React, { FC } from 'react';
export interface SafariLoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller' | undefined;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | React.CSSProperties['color'] | undefined;
}
declare const SafariLoader: FC<SafariLoaderProps>;
export declare const Wrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default SafariLoader;
