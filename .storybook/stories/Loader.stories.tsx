import type { Meta, StoryObj } from '@storybook/react';
import type { LoaderProps } from '../../src';
import { Loader } from '../../src';

const meta = {
    title: 'Loader',
    component: Loader,
} satisfies Meta<LoaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        layout: 'centered',
    },
    argTypes: {
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
    },
    args: {
        size: 'medium',
        variant: 'default',
        color: 'primary',
    },
};
