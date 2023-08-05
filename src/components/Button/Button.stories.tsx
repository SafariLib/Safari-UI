import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './Button';

const meta = {
    title: 'Base Button',
    component: Button,
    argTypes: {
        isLoading: {
            control: {
                type: 'boolean',
            },
        },
    },
} satisfies Meta<ButtonProps>;

const ButtonWithHooks = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <Button
            isLoading={isLoading}
            onClick={() => {
                setIsLoading(!isLoading);
            }}>
            Action
        </Button>
    );
};

export const Primary: StoryObj<typeof meta> = {
    render: () => <ButtonWithHooks />,
    parameters: {
        layout: 'centered',
    },
    args: {
        isLoading: false,
    },
};

export default meta;
