export interface LoaderProps {
    size?: 'small' | 'medium' | 'large' | undefined;
    variant?: 'ellipsis' | 'EllipsisRolling' | 'spinner' | 'roller' | 'roller-trailing' | 'ring' | undefined;
}

/**
 * **Source**
 *  - https://loading.io/css/
 *  - https://cssloaders.github.io/
 */
declare const Loader: React.FC<LoaderProps>;
