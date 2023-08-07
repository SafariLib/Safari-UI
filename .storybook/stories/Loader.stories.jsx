import { Loader } from '../../src';

export default {
    title: 'Loader',
    component: Loader,
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            control: 'select',
            options: ['ellipsis', 'ellipsisRolling', 'spinner', 'roller', 'rollerTrailing', 'ring'],
        },
    },
};

export const Primary = {
    parameters: {
        layout: 'centered',
    },
    args: {
        size: 'medium',
        variant: 'ring',
    },
};
