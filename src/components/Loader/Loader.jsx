'use client';

import { classNames } from '../../utils';
import { SafariLoader } from './Loader.styled';
import { Ellipsis, EllipsisRolling, Ring, Roller, RollerTrailing, Spinner } from './variants';

const { SafariUILoader } = classNames;

/**
 * @typedef {Object} LoaderProps
 * @property {'small' | 'medium' | 'large'} [size]
 * @property {'ellipsis' | 'ellipsisRolling' | 'spinner' | 'roller' | 'rollerTrailing' | 'ring'} [variant]
 */

/**
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
const Loader = ({ variant = 'ring', size = 'md' }) => (
    <SafariLoader className={SafariUILoader}>
        {variant === 'ellipsis' && <Ellipsis />}
        {variant === 'ellipsisRolling' && <EllipsisRolling />}
        {variant === 'spinner' && <Spinner />}
        {variant === 'roller' && <Roller />}
        {variant === 'rollerTrailing' && <RollerTrailing />}
        {variant === 'ring' && <Ring />}
    </SafariLoader>
);

export default Loader;
