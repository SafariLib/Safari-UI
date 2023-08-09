import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonProps } from '../../src';
import { Button } from '../../src';

const meta = {
    title: 'Button',
    component: Button,
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        loaderVariant: {
            control: 'select',
            options: ['default', 'ellipsis', 'ellipsis-rolling', 'spinner'],
        },
    },
    args: {
        children: 'Action',
        isLoading: false,
        loaderVariant: 'default',
        variant: 'contained',
        color: 'primary',
        size: 'large',
    },
};
