import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Loader, LoaderProps } from '../../src';

const meta = {
    title: 'Loading/Loader',
    component: Loader,
} satisfies Meta<LoaderProps>;

export default meta;

export const Safari_Loader: StoryFn<LoaderProps> = (args: LoaderProps) => <Loader {...args} />;

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
