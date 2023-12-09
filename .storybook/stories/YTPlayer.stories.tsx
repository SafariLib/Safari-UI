import { css, styled } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { YTPlayer, YTPlayerProps } from '../../src';

const meta = {
    title: 'Video/YTPlayer',
    component: YTPlayer,
} satisfies Meta<YTPlayerProps>;

export default meta;

export const Safari_YTPlayer: StoryFn<YTPlayerProps> = (args: YTPlayerProps) => (
    <Layout>
        <YTPlayer {...args} />
    </Layout>
);

const Layout = styled('div')(
    ({ theme }) => css`
        height: 100vh;
        width: 100vw;
    `,
);

Safari_YTPlayer.argTypes = {};

Safari_YTPlayer.args = {
    resizable: true,
    url: 'https://www.youtube.com/watch?v=pUrg3b5AJmc&list=LL&index=3',
};
