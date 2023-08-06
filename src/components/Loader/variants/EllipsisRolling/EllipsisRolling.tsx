import React from 'react';
import { resolveClasses } from '../../../../utils';
import './EllipsisRolling.scss';

const EllipsisRolling: React.FC = () => {
    const className = resolveClasses(['SafariUI-loader-ellipsisRolling']);
    return <div className={className} />;
};

export default EllipsisRolling;
