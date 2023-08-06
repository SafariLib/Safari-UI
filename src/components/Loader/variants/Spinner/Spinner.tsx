import React from 'react';
import { resolveClasses } from '../../../../utils';
import './Spinner.scss';

const Spinner: React.FC = () => {
    const classNames = {
        frame: resolveClasses(['SafariUI-loader-spinner']),
        dot: resolveClasses(['SafariUI-loader-spinner', 'SafariUI-loader-spinner-dot']),
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
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
            <div className={classNames.dot}></div>
        </div>
    );
};

export default Spinner;
