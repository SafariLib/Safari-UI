import React from 'react';
import { classNames } from '../../../../utils';
import { SpinnerDot, SpinnerWrapper } from './Spinner.styled';

const { SafariUILoaderSpinner, SafariUILoaderSpinnerDot } = classNames;

const Spinner = () => (
    <SpinnerWrapper className={SafariUILoaderSpinner}>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
        <SpinnerDot className={SafariUILoaderSpinnerDot}></SpinnerDot>
    </SpinnerWrapper>
);

export default Spinner;
