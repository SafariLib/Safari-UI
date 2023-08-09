export interface LoaderProps {
    size?: 'small' | 'medium' | 'large' | number | undefined;
    variant?: 'ellipsis' | 'EllipsisRolling' | 'spinner' | 'roller' | 'ring' | undefined;
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
 * - `variant` _'ellipsis'_ | _'EllipsisRolling'_ | _'spinner'_ | _'roller'_ | _'ring'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **Source**
 *  - https://loading.io/css/
 *  - https://cssloaders.github.io/
 */
declare const Loader: React.FC<LoaderProps>;

export default Loader;
