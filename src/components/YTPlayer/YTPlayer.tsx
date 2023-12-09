import { css, styled } from '@mui/material';
import React, { FC } from 'react';
import YTIFrame from './utils/YTIFrame';

interface ContainerProps {
    height?: number;
    width?: number;
    resizable?: boolean;
}

export interface YTPlayerProps extends ContainerProps {
    id?: string;
    url: string;
}

/**
 * Customized Youtube video player.
 * - `id` _string_
 *
 * The id of the player.
 *
 * - `url` _string_
 *
 * The youtube url of the video, additionnal string parameters won't be used.
 *
 *
 * **Source**
 *  - https://developers.google.com/youtube/iframe_api_reference#Events
 */
const YTPlayer: FC<YTPlayerProps> = ({ id, url, ...containerProps }) => {
    const playerId = `yt-player-${id ?? '00'}`;

    return (
        <MainContainer {...containerProps}>
            <YTIFrame id={playerId} url={url} />
        </MainContainer>
    );
};

const MainContainer = styled('div')<ContainerProps>(
    ({ theme, width, height, resizable }) => css`
        height: ${height ? `${height}px` : 'unset'};
        width: ${width ? `${width}px` : '100%'};
        border: 'none';
        overflow: hidden;
        border-radius: 5px;
        resize: ${resizable ? 'both' : 'none'};
    `,
);

export default YTPlayer;
