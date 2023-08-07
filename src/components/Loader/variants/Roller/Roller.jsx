import React from 'react';
import { classNames } from '../../../../utils';
import { RollerDot, RollerWrapper } from './Roller.styled';

const { SafariUILoaderRoller, SafariUILoaderRollerDot } = classNames;

const Roller = () => (
    <RollerWrapper className={SafariUILoaderRoller}>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
        <RollerDot className={SafariUILoaderRollerDot}></RollerDot>
    </RollerWrapper>
);

export default Roller;
