import { Stack, css, styled } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Button } from '../../src';
import YTPlayer, { YTPlayerProps } from '../../src/components/YTPlayer/YTPlayer';

const meta = {
    title: 'Playground/YTPlayer',
    component: YTPlayer,
} satisfies Meta<YTPlayerProps>;

export default meta;

export const Safari_YTPlayer: StoryFn<YTPlayerProps> = (args: YTPlayerProps) => {
    const [player, setPlayer] = React.useState<YT.Player>();

    const handleOnReady = (e: YT.Player) => setPlayer(e);
    const handlePlayClick = () => player?.playVideo();

    return (
        <Layout>
            <Actions>
                <Button onClick={handlePlayClick}>Play</Button>
            </Actions>
            <YTPlayer id="yt-demo-player" onReady={handleOnReady} />
        </Layout>
    );
};

const Layout = styled(Stack)(css`
    width: 100vw;
    height: 100vh;
`);

const Actions = styled(Stack)(css`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    & .MuiTextField-root {
        width: 50%;
        max-width: 500px;
    }
`);

Safari_YTPlayer.argTypes = {};

Safari_YTPlayer.args = {};
