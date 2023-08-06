import React from 'react';
import { resolveClasses } from '../../../../utils';
import './Ellipsis.scss';

const Ellipsis: React.FC = () => {
    const classNames = {
        frame: resolveClasses(['SafariUI-loader-ellipsis']),
        dot: resolveClasses(['SafariUI-loader-ellipsis', 'SafariUI-loader-ellipsis-dot']),
    };

    return (
        <div className={classNames.frame}>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
        </div>
    );
};

export default Ellipsis;
