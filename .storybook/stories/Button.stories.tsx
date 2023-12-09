import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../../src';

const meta = {
    title: 'Buttons/Button',
    component: Button,
} satisfies Meta<ButtonProps>;

export default meta;

export const Safari_Button: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

Safari_Button.parameters = {
    layout: 'centered',
};

Safari_Button.argTypes = {
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
    textTransform: {
        control: 'select',
        options: ['initial', 'capitalize', 'uppercase', 'lowercase'],
    },
};

Safari_Button.args = {
    children: 'Action',
    isLoading: false,
    elevation: false,
    variant: 'contained',
    loaderVariant: 'default',
    color: 'primary',
    size: 'small',
    textTransform: 'initial',
};
