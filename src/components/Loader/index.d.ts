export interface LoaderProps {
    size?: 'small' | 'medium' | 'large' | undefined;
    variant?: 'ellipsis' | 'EllipsisRolling' | 'spinner' | 'roller' | 'roller-trailing' | 'ring' | undefined;
}

/**
 * Pure CSS loaders.
 * - `size` _'small'_ | _'medium'_ | _'large'_ | _undefined_
 *
 * The size of the loader.
 *
 * - `variant` _'ellipsis'_ | _'EllipsisRolling'_ | _'spinner'_ | _'roller'_ | _'roller-trailing'_ | _'ring'_ | _undefined_
 *
 * The loader variant to use.
 *
 * **Source**
 *  - https://loading.io/css/
 *  - https://cssloaders.github.io/
 */
declare const Loader: React.FC<LoaderProps>;

export default Loader;
