import type { ButtonProps as MUIButtonProps } from '@mui/material';

export interface ButtonProps extends MUIButtonProps {
    isLoading?: boolean | undefined;
    loaderVariant?: 'ellipsis' | 'EllipsisRolling' | 'spinner' | 'roller' | 'ring' | undefined;
}

/**
 * Extends MUI Button with a loading state.
 * - `isLoading` _boolean_
 *
 * If true, the button's children will be disabled and show a loader.
 *
 * - `loaderVariant` _'default'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **MUI Button API**
 *
 * https://mui.com/material-ui/api/button/
 */
declare const Button: React.FC<ButtonProps>;

export default Button;
