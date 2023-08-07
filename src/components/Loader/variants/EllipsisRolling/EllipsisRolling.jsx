'use client';

import { classNames } from '../../../../utils';
import { EllipsisRollingWrapper } from './EllipsisRolling.styled';

const { SafariUILoaderEllipsisRolling } = classNames;

const EllipsisRolling = () => <EllipsisRollingWrapper className={SafariUILoaderEllipsisRolling} />;

export default EllipsisRolling;
