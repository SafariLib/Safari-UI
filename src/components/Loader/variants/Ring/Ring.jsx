'use client';

import { classNames } from '../../../../utils';
import { RingTrail, RingWrapper } from './Ring.styled';

const { SafariUILoaderRing, SafariUILoaderRingTrail } = classNames;

const Ring = () => (
    <RingWrapper className={SafariUILoaderRing}>
        <RingTrail className={SafariUILoaderRingTrail}></RingTrail>
        <RingTrail className={SafariUILoaderRingTrail}></RingTrail>
        <RingTrail className={SafariUILoaderRingTrail}></RingTrail>
        <RingTrail className={SafariUILoaderRingTrail}></RingTrail>
    </RingWrapper>
);

export default Ring;
