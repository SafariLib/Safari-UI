import { Button } from '../../src';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = {
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isLoading: {
            control: 'boolean',
            description: 'If true, the button will show a loader instead of the children',
        },
        variant: {
            control: 'select',
            options: ['contained', 'outlined', 'text'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        },
        loaderVariant: {
            control: 'select',
            options: ['default'],
        },
    },
    args: {
        children: 'Action',
        isLoading: false,
        loaderVariant: 'default',
        variant: 'contained',
        color: 'primary',
    },
};
