import { ButtonProps as ButtonProps$1 } from '@mui/material';

interface ButtonProps extends ButtonProps$1 {
    isLoading?: boolean | undefined;
    loaderVariant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | undefined;
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
declare const Button: React.FC<ButtonProps>;

interface LoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'default' | 'ellipsis' | 'ellipsis-rolling' | 'spinner' | 'roller' | undefined;
    color?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'error'
        | 'info'
        | React.CSSProperties['color']
        | undefined;
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
declare const Loader: React.FC<LoaderProps>;

export { Button, ButtonProps, Loader, LoaderProps };
