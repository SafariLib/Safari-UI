import React, { FC } from 'react';
import { type ButtonProps } from '@mui/material';
export interface SafariButtonProps extends Omit<ButtonProps, 'disableElevation'> {
    isLoading?: boolean | undefined;
    loaderVariant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | undefined;
    elevation?: boolean;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial';
}
declare const SafariButton: FC<SafariButtonProps>;
export declare const LoaderWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    isLoading?: boolean | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Content: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    isLoading?: boolean | undefined;
    textTransform: SafariButtonProps['textTransform'];
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Button: import("@emotion/styled").StyledComponent<import("@mui/material").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
}, "style" | "color" | "size" | "variant" | "children" | "className" | "classes" | "tabIndex" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "startIcon"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export default SafariButton;
