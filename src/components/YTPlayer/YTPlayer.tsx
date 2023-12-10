import { css, styled } from '@mui/material';
import React, { FC } from 'react';

export enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
}

type Events = Omit<YT.PlayerOptions['events'], 'onReady'>;

export type YTPlayerProps = Events & {
    id?: string;
    onReady: (e: YT.Player) => void;
};

/**
 * Customized Youtube video player.
 * - `id` _string_
 *
 * The id of the player.
 *
 * **Events**
 * See the Youtube Player API Reference
 * https://developers.google.com/youtube/iframe_api_reference?hl=en#Events
 */
const YTPlayer: FC<YTPlayerProps> = ({ id = 'yt-player', onReady, ...events }) => {
    React.useEffect(() => {
        const existing = document.getElementById('yt-api-src');
        if (existing) document.body.removeChild(existing);

        const tag = document.createElement('script');
        tag.id = 'yt-api-src';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }, []);

    // @ts-ignore - event isn't typed
    window.onYouTubePlayerAPIReady = () => {
        const player = new YT.Player(id, {
            host: 'https://www.youtube-nocookie.com',
            videoId: 'pUrg3b5AJmc',
            events,
        });
        onReady(player);
    };

    return <Iframe id={id} />;
};

const Iframe = styled('div')(css`
    height: 100%;
    width: 100%;
    border: none;
`);

export default YTPlayer;
