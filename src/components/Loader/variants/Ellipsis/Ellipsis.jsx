'use client';

import { classNames } from '../../../../utils';
import { EllipsisDot, EllipsisWrapper } from './Ellipsis.styled';

const { SafariUILoaderEllipsis, SafariUILoaderEllipsisDot } = classNames;

const Ellipsis = () => (
    <EllipsisWrapper className={SafariUILoaderEllipsis}>
        <EllipsisDot className={SafariUILoaderEllipsisDot}></EllipsisDot>
        <EllipsisDot className={SafariUILoaderEllipsisDot}></EllipsisDot>
        <EllipsisDot className={SafariUILoaderEllipsisDot}></EllipsisDot>
        <EllipsisDot className={SafariUILoaderEllipsisDot}></EllipsisDot>
    </EllipsisWrapper>
);

export default Ellipsis;
