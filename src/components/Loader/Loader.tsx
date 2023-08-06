import React from 'react';
import { resolveClasses } from '../../utils';
import './Loader.scss';
import { Ellipsis, EllipsisRolling, Ring, Roller, RollerTrailing, Spinner } from './variants';

export interface LoaderProps {
    hidden?: boolean | undefined;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    variant?: 'ellipsis' | 'EllipsisRolling' | 'spinner' | 'roller' | 'roller-trailing' | 'ring' | undefined;
}

/**
 * **Source**
 *  - https://loading.io/css/
 *  - https://cssloaders.github.io/
 */
const Loader: React.FC<LoaderProps> = ({ variant = 'ring', size = 'md', hidden = false }) => {
    const className = resolveClasses(['SafariUI-loader']);

    switch (variant) {
        case 'ellipsis':
            return <Ellipsis />;
        case 'EllipsisRolling':
            return <EllipsisRolling />;
        case 'spinner':
            return <Spinner />;
        case 'roller':
            return <Roller />;
        case 'roller-trailing':
            return <RollerTrailing />;
        case 'ring':
            return <Ring />;
    }
};

export default Loader;
