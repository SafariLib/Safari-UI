import React from 'react';
import { resolveClasses } from '../../../../utils';
import './RollerTrailing.scss';

const RollerTrailing: React.FC = () => {
    const className = resolveClasses(['SafariUI-loader-rollerTrailing']);
    return <div className={className} />;
};

export default RollerTrailing;
