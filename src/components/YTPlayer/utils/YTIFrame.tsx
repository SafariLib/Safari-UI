import { css, styled } from '@mui/material';
import React, { FC } from 'react';

interface Props {
    id: string;
    url: string;
    events?: YT.PlayerOptions['events'];
}

const YTIFrame: FC<Props> = ({ id, url, events }) => {
    const videoId = url.split('v=')[1].split('&')[0];

    React.useEffect(() => {
        const existing = document.getElementById('yt-api-src');
        if (existing) return;

        const tag = document.createElement('script');
        tag.id = 'yt-api-src';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }, []);

    // @ts-ignore - event isn't typed
    window.onYouTubePlayerAPIReady = () => {
        new YT.Player(id, {
            host: 'https://www.youtube-nocookie.com',
            videoId,
            events,
        });
    };

    return <Iframe id={id} />;
};

const Iframe = styled('div')(css`
    height: 100%;
    width: 100%;
    border: none;
`);

export default YTIFrame;
