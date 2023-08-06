import React from 'react';
import { resolveClasses } from '../../../../utils';
import './Ring.scss';

const Ring: React.FC = () => {
    const classNames = {
        frame: resolveClasses(['SafariUI-loader-ring']),
        trail: resolveClasses(['SafariUI-loader-ring', 'SafariUI-loader-ring-trail']),
    };

    return (
        <div className={classNames.frame}>
            <div className={classNames.trail}></div>
            <div className={classNames.trail}></div>
            <div className={classNames.trail}></div>
            <div className={classNames.trail}></div>
        </div>
    );
};

export default Ring;
