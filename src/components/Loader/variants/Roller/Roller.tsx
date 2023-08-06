import React from 'react';
import { resolveClasses } from '../../../../utils';
import './Roller.scss';

const Roller: React.FC = () => {
    const classNames = {
        frame: resolveClasses(['SafariUI-loader-roller']),
        dot: resolveClasses(['SafariUI-loader-roller', 'SafariUI-loader-roller-dot']),
    };

    return (
        <div className={classNames.frame}>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
        </div>
    );
};

export default Roller;
