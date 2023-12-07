import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SafariLoader, SafariLoaderProps } from '../../src';

const meta = {
    title: 'Loading/SafariLoader',
    component: SafariLoader,
} satisfies Meta<SafariLoaderProps>;

export default meta;

export const Safari_Loader: StoryFn<SafariLoaderProps> = (args: SafariLoaderProps) => <SafariLoader {...args} />;

Safari_Loader.parameters = {
    layout: 'centered',
};

Safari_Loader.argTypes = {
    size: {
        control: 'select',
        options: ['small', 'medium', 'large'],
    },
    variant: {
        control: 'select',
        options: ['default', 'ellipsis', 'ellipsis-rolling', 'spinner', 'roller'],
    },
    color: {
        control: 'color',
    },
};

Safari_Loader.args = {
    size: 'medium',
    variant: 'default',
    color: 'primary',
};
