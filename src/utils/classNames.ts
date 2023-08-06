import classnames from 'classnames';

export const resolveClasses = (names: Array<ClassName>) => classnames(names);

type ClassName =
    | 'SafariUI'
    | 'SafariUI-disabled'
    | 'SafariUI-btn'
    | 'SafariUI-btn-text'
    | 'SafariUI-btn-outlined'
    | 'SafariUI-loader'
    | 'SafariUI-loader-ellipsis'
    | 'SafariUI-loader-ellipsis-dot'
    | 'SafariUI-loader-ellipsisRolling'
    | 'SafariUI-loader-spinner'
    | 'SafariUI-loader-spinner-dot'
    | 'SafariUI-loader-roller'
    | 'SafariUI-loader-roller-dot'
    | 'SafariUI-loader-rollerTrailing'
    | 'SafariUI-loader-ring'
    | 'SafariUI-loader-ring-trail';
